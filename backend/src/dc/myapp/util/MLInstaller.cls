Class dc.myapp.util.MLInstaller
{

ClassMethod Exec()
{
    set sc = ..Main()
    Write:$$$ISERR(sc) sc,!
    Write:'$$$ISERR(sc) "OK!",!
}

ClassMethod QuitOnSQLError(pSQLCODE) As %Status
{
    set sc = $$$OK
    If (pSQLCODE '= 0) && (pSQLCODE '= 100) {
        Set msg = ##class(%SYSTEM.SQL).SQLCODE(-pSQLCODE)
        Set sc = $$$ERROR($$$SQLError, pSQLCODE, msg)
    }
    return sc
}

ClassMethod Main() As %Status
{
    set sc = $$$OK
    $$$QuitOnError(..ImportMedicalAppointmentsStage())
    $$$QuitOnError(..ImportMedicalAppointments())
    $$$QuitOnError(..ClearMedicalAppointments())
    $$$QuitOnError(..CreateNoShowDetectionModel())
    $$$QuitOnError(..TrainNoShowDetectionModel())
    $$$QuitOnError(..BuildCube())
    return sc
}

ClassMethod ImportMedicalAppointmentsStage() As %Status
{
    Write "Populating medical appointments stage table... "
    Set sc = ##class(dc.myapp.util.Loader).Load(
        "/app/data/medical-appointments.csv",
        "dc.myapp.model.MedicalAppointmentsStage",
        ","
    )
    Write "Stage table populated.",!
    Return sc
}

ClassMethod ImportMedicalAppointments() As %Status
{
    set sc = $$$OK

    Write "Importing medical appointments from stage table... "

    &SQL(TRUNCATE TABLE dc_myapp_model.MedicalAppointments)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    // Import data from stage table, setting all date to 2020
    &SQL(INSERT %NOINDEX INTO dc_myapp_model.MedicalAppointments (Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Show, Tipo) SELECT Canal, CAST('2020-'||CreacionMesD||'-'||CreacionDiaD AS DATE), CreacionHoraD, Edad, Especialidad, Latencia, CAST('2020-'||ReservaMesD||'-'||ReservaDiaD AS DATE), ReservaHoraD, Sexo, Show, Tipo FROM dc_myapp_model.MedicalAppointmentsStage)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    $$$QuitOnError(##class(dc.myapp.model.MedicalAppointments).%BuildIndices(,1))

    // Detects invalid book date and fix them
    &SQL(UPDATE %NOINDEX dc_myapp_model.MedicalAppointments SET ReservaDate = ReservaDate + 365 WHERE CreacionDate > ReservaDate)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    $$$QuitOnError(##class(dc.myapp.model.MedicalAppointments).%BuildIndices(,1))

    Write "Table imported.",!

    return sc
}

ClassMethod ClearMedicalAppointments() As %Status
{
    set sc = $$$OK

    Write "Clear the Show column in order to simulate new entries... "

    // Deletes data after from February
    &SQL(DELETE FROM dc_myapp_model.MedicalAppointments WHERE ReservaDate >= CAST(CAST('2021-03-01' AS DATE) AS INTEGER))
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    // Randomily selects 500 records after 2021-01-01 to keep in dataset
    &SQL(SELECT LIST(ID) INTO :delList FROM dc_myapp_model.MedicalAppointments WHERE ReservaDate > CAST(CAST('2021-01-01' AS DATE) AS INTEGER))
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Set delList = $LISTFROMSTRING(delList)
    Set lenDelList = $LISTLENGTH(delList)
    Set keepList = ""
    For i=1:1:500 {
        Try{
            Set idx = $RANDOM(lenDelList)
            Set $List(keepList, * + 1) = $List(delList, idx)
        } Catch(e) {}
    }
    &SQL(DELETE FROM dc_myapp_model.MedicalAppointments WHERE ID NOT %INLIST :keepList AND ReservaDate > CAST(CAST('2021-01-01' AS DATE) AS INTEGER))
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    
    // Removes Show result for 500 random records after 2021-01-01
    &SQL(UPDATE dc_myapp_model.MedicalAppointments SET Show = NULL WHERE Id IN (SELECT TOP 500 ID FROM dc_myapp_model.MedicalAppointments ORDER BY ReservaDate DESC))
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Table cleared.",!

    return sc
}

ClassMethod CreateNoShowDetectionModel() As %Status
{
    set sc = $$$OK
    Write "Creating AppointmentsPredection model... "
    Try {
        &SQL(DROP MODEL AppointmentsPredection)
    } Catch(e) {
        // ignore model not found errors...
    }
    &SQL(CREATE MODEL AppointmentsPredection PREDICTING (Show) FROM (SELECT Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Tipo FROM dc_myapp_model.MedicalAppointments))
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Model AppointmentsPredection created.",!
    return sc
}

ClassMethod TrainNoShowDetectionModel() As %Status
{
    set sc = $$$OK

    Write "Creating train and test sets..."
    //&SQL(SELECT COUNT(*) INTO :dataSetLen FROM dc_myapp_model.MedicalAppointments)
    Set dataSetLen = 20000
    Set trainRange = dataSetLen * .8
    &SQL(TRUNCATE TABLE dc_myapp_model.MedicalAppointmentsTrain)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    // Train set
    &SQL(INSERT INTO dc_myapp_model.MedicalAppointmentsTrain (Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Show, Tipo) SELECT TOP :dataSetLen Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Show, Tipo FROM dc_myapp_model.MedicalAppointments WHERE Show IS NOT NULL AND ID < :trainRange)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    // Test set
    &SQL(INSERT INTO dc_myapp_model.MedicalAppointmentsTest (Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Show, Tipo) SELECT TOP :dataSetLen Canal, CreacionDate, CreacionHora, Edad, Especialidad, Latencia, ReservaDate, ReservaHora, Sexo, Show, Tipo FROM dc_myapp_model.MedicalAppointments WHERE Show IS NOT NULL AND ID >= :trainRange)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    Write " Set created.",!

    &SQL(SELECT COUNT(*) INTO :trainCount FROM dc_myapp_model.MedicalAppointmentsTrain)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Trainning AppointmentsPredection model for ", trainCount ," records... "

    // Train
    &SQL(TRAIN MODEL AppointmentsPredection FROM dc_myapp_model.MedicalAppointmentsTrain)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Model AppointmentsPredection trained.",!

    // Test
    &SQL(SELECT COUNT(*) INTO :testCount FROM dc_myapp_model.MedicalAppointmentsTest)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Validating model using ", testCount, " records..."
    &SQL(VALIDATE MODEL AppointmentsPredection FROM dc_myapp_model.MedicalAppointmentsTest)
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))

    // Model perfomance metrics
    &SQL(SELECT LIST(METRIC_NAME||': '||METRIC_VALUE) INTO :validationInfo FROM INFORMATION_SCHEMA.ML_VALIDATION_METRICS WHERE MODEL_NAME = 'AppointmentsPredection')
    $$$QuitOnError(..QuitOnSQLError(SQLCODE))
    Write "Model validation results: ", validationInfo,!

    return sc
}

ClassMethod BuildCube() As %Status
{
    set sc = $$$OK
    Set sc = ##class(%DeepSee.Utils).%BuildCube("MedicalAppointments")
    return sc
}

}
