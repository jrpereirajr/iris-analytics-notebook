Class dc.myapp.model.MedicalAppointments Extends %Persistent
{

Property Especialidad As %Integer;

Property Edad As %Integer;

Property Sexo As %Integer(DISPLAYLIST = ",Male,Female", VALUELIST = ",1,2");

Property ReservaDate As %Date;

Property ReservaHora As %Integer;

Property CreacionDate As %Date;

Property CreacionHora As %Integer;

Property Latencia As %Integer;

Property Canal As %Integer(DISPLAYLIST = ",Call center,Personal,Web", VALUELIST = ",1,2,3");

Property Tipo As %Integer(DISPLAYLIST = ",Medical,Procedure", VALUELIST = ",1,2");

Property Show As %Boolean(DISPLAYLIST = ",No show,Show", VALUELIST = ",0,1");

Index idxReservaDate On ReservaDate;

Index idxCreacionDate On CreacionDate;

Index idxShow On Show;

ClassMethod PredictMedicalAppointmentClass(pID As %String) As %String
{
  Set modelClass = ##class(dc.myapp.model.MedicalAppointments).ShowGetStored(pID)
  If modelClass '= "" {
    Return ""
  }
  &SQL(SELECT PREDICT(AppointmentsPredection) INTO :modelClass FROM dc_myapp_model.MedicalAppointments WHERE ID = :pID)
  return $Case(modelClass, 0:"No show", 1:"Show", :"")
}

Storage Default
{
<Data name="MedicalAppointmentsDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Especialidad</Value>
</Value>
<Value name="3">
<Value>Edad</Value>
</Value>
<Value name="4">
<Value>Sexo</Value>
</Value>
<Value name="5">
<Value>ReservaDate</Value>
</Value>
<Value name="6">
<Value>ReservaHora</Value>
</Value>
<Value name="7">
<Value>CreacionDate</Value>
</Value>
<Value name="8">
<Value>CreacionHora</Value>
</Value>
<Value name="9">
<Value>Latencia</Value>
</Value>
<Value name="10">
<Value>Canal</Value>
</Value>
<Value name="11">
<Value>Tipo</Value>
</Value>
<Value name="12">
<Value>Show</Value>
</Value>
</Data>
<DataLocation>^dc.myapp.m4691.MedicalAppo1D28D</DataLocation>
<DefaultData>MedicalAppointmentsDefaultData</DefaultData>
<IdLocation>^dc.myapp.m4691.MedicalAppo1D28D</IdLocation>
<IndexLocation>^dc.myapp.m4691.MedicalAppo1D28I</IndexLocation>
<StreamLocation>^dc.myapp.m4691.MedicalAppo1D28S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
