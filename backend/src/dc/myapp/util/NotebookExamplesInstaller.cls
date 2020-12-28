Class dc.myapp.util.NotebookExamplesInstaller
{

ClassMethod Exec()
{
    set sc = ..Main()
    Write:$$$ISERR(sc) sc,!
    Write:'$$$ISERR(sc) "OK!",!
}

ClassMethod Main() As %Status
{
    set sc = $$$OK
    $$$QuitOnError(..InstallMyCustomAnalysisNotebook())
    $$$QuitOnError(..InstallAppointmentsNotebook())
    return sc
}

ClassMethod InstallMyCustomAnalysisNotebook() As %Status
{
  set sc = $$$OK

  TSTART
  Try {
    Set notebookInfo("name") = "my-custom-analysis"
    $$$TOE(sc, ..InsertNotebook(.notebookInfo, .notebookId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "### My custom analysis for sales in 2020"_$C(13)_"---"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "#### Revenue by region"_$C(13)_"*an important note here!*"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "PIVOT_TABLE"
    Set cellInfo("content") = ({"source":{"name":"HoleFoods","displayName":"HoleFoods Sales","lastModified":"2020-12-27 02:33:31","type":"cube"},"rows":[{"type":0,"value":"MonthSold","data":{"dimension":{"caption":"MonthSold","value":"[DateOfSale].[Actual].[MonthSold]","type":"month"}},"msg":""}],"cols":[{"type":0,"value":"Region","data":{"dimension":{"caption":"Region","value":"[Outlet].[H1].[Region]","type":""}},"msg":""}],"measures":[{"type":1,"value":"Revenue","data":{"name":"Amount Sold","caption":"Revenue","type":"number","hidden":0,"factName":"MxAmountOfSale"},"msg":""}],"filters":[{"type":0,"value":"YearSold","data":{"dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"},"options":[{"text":"AGORA","value":"&[NOW]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2015,"value":"&[2015]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2016,"value":"&[2016]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2017,"value":"&[2017]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2018,"value":"&[2018]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2019,"value":"&[2019]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2020,"value":"&[2020]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}}]},"msg":""}],"filterSelection":{"YearSold":{"value":[{"text":2020,"value":"&[2020]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}}]}},"currChartType":"area","pivotView":"table"}).%ToJSON()
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "#### A closer look, only in Americas:"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "PIVOT_TABLE"
    Set cellInfo("content") = ({"source":{"name":"HoleFoods","displayName":"HoleFoods Sales","lastModified":"2020-12-27 02:33:31","type":"cube"},"rows":[{"type":0,"value":"MonthSold","data":{"dimension":{"caption":"MonthSold","value":"[DateOfSale].[Actual].[MonthSold]","type":"month"}},"msg":""}],"cols":[{"type":0,"value":"Region","data":{"dimension":{"caption":"Region","value":"[Outlet].[H1].[Region]","type":""}},"msg":""}],"measures":[{"type":1,"value":"Revenue","data":{"name":"Amount Sold","caption":"Revenue","type":"number","hidden":0,"factName":"MxAmountOfSale"},"msg":""}],"filters":[{"type":0,"value":"YearSold","data":{"dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"},"options":[{"text":"AGORA","value":"&[NOW]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2015,"value":"&[2015]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2016,"value":"&[2016]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2017,"value":"&[2017]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2018,"value":"&[2018]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2019,"value":"&[2019]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}},{"text":2020,"value":"&[2020]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}}]},"msg":""},{"type":0,"value":"Region","data":{"dimension":{"caption":"Region","value":"[Outlet].[H1].[Region]","type":""}},"msg":""}],"filterSelection":{"YearSold":{"value":[{"text":2020,"value":"&[2020]","description":"","dimension":{"caption":"YearSold","value":"[DateOfSale].[Actual].[YearSold]","type":"year"}}]},"Region":{"value":[{"text":"N. America","value":"&[N. America]","description":"","dimension":{"caption":"Region","value":"[Outlet].[H1].[Region]","type":""}},{"text":"S. America","value":"&[S. America]","description":"","dimension":{"caption":"Region","value":"[Outlet].[H1].[Region]","type":""}}]}},"currChartType":"area","pivotView":"chart"}).%ToJSON()
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "#### And a legacy IRIS dashboard with relevant information for my analysis:"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "IRIS_ANALYTICS_URL"
    Set cellInfo("content") = "http://localhost:52773/csp/myapp/_DeepSee.UserPortal.DashboardViewer.zen?DASHBOARD=Pareto%20Charts/Pareto%20Chart%20for%20Category.dashboard"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "	#### My conclusions:"_$C(13)_"* Markdown are really nice!"_$C(13)_"* IRIS Analytics rocks!"_$C(13)_"* Notebooks are awsome! &#128516;"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    TCOMMIT
  } Catch ex {
    TROLLBACK
    Set tSC=ex.AsStatus()
  }

  return sc
}

ClassMethod InstallAppointmentsNotebook() As %Status
{
  set sc = $$$OK

  TSTART
  Try {
    Set notebookInfo("name") = "medical-appointments"
    $$$TOE(sc, ..InsertNotebook(.notebookInfo, .notebookId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "#### No-show analysis"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "##### No-show distribution over 2020:"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "PIVOT_TABLE"
    Set cellInfo("content") = ({"source":{"name":"MedicalAppointments","displayName":"MedicalAppointments","lastModified":"2020-12-27 14:41:48","type":"cube"},"rows":[{"type":0,"value":"Creation Date","data":{"dimension":{"caption":"Creation Date","value":"[CreationDateD].[H1].[CreationDate]","type":"day"}},"msg":""}],"cols":[{"type":0,"value":"Show","data":{"dimension":{"caption":"Show","value":"[ShowD].[H1].[Show]","type":""}},"msg":""}],"measures":[],"filters":[{"type":0,"value":"Show","data":{"dimension":{"caption":"Show","value":"[ShowD].[H1].[Show]","type":""}},"msg":""}],"filterSelection":{"Show":{"value":[{"text":"No show","value":"&[No show]","description":"","dimension":{"caption":"Show","value":"[ShowD].[H1].[Show]","type":""}},{"text":"Show","value":"&[Show]","description":"","dimension":{"caption":"Show","value":"[ShowD].[H1].[Show]","type":""}}]}},"currChartType":"area","pivotView":"chart"}).%ToJSON()
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "MARKDOWN"
    Set cellInfo("content") = "##### No-show forecast for next 2 months:"
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    Set cellInfo("notebookId") = notebookId
    Set cellInfo("type") = "PIVOT_TABLE"
    Set cellInfo("content") = ({"source":{"name":"MedicalAppointments","displayName":"MedicalAppointments","lastModified":"2020-12-27 14:41:48","type":"cube"},"rows":[{"type":0,"value":"Book Date","data":{"dimension":{"caption":"Book Date","value":"[BookDateD].[H1].[BookDate]","type":"day"}},"msg":""}],"cols":[{"type":0,"value":"Predicted Show","data":{"dimension":{"caption":"Predicted Show","value":"[PredictedShowD].[H1].[PredictedShow]","type":""}},"msg":""}],"measures":[],"filters":[{"type":0,"value":"Predicted Show","data":{"dimension":{"caption":"Predicted Show","value":"[PredictedShowD].[H1].[PredictedShow]","type":""}},"msg":""}],"filterSelection":{"Predicted Show":{"value":[{"text":"No show","value":"&[No show]","description":"","dimension":{"caption":"Predicted Show","value":"[PredictedShowD].[H1].[PredictedShow]","type":""}},{"text":"Show","value":"&[Show]","description":"","dimension":{"caption":"Predicted Show","value":"[PredictedShowD].[H1].[PredictedShow]","type":""}}]}},"currChartType":"area","pivotView":"chart"}).%ToJSON()
    $$$TOE(sc, ..InsertCell(.cellInfo, .cellId))

    TCOMMIT
  } Catch ex {
    TROLLBACK
    Set tSC=ex.AsStatus()
  }

  return sc
}

ClassMethod InsertNotebook(pValues, ByRef pId As %String) As %Status
{
  set sc = $$$OK
  Set name = pValues("name")
  &SQL(INSERT INTO dc_myapp_model.Notebook (name) VALUES (:name))
  $$$QuitOnError(##class(dc.myapp.util.MLInstaller).QuitOnSQLError(SQLCODE))
  Set pId = %ROWID
  return sc
}

ClassMethod InsertCell(pValues, ByRef pId As %String) As %Status
{
  set sc = $$$OK
  Set notebookId = pValues("notebookId")
  Set type = pValues("type")
  Set content = pValues("content")
  &SQL(INSERT INTO dc_myapp_model.Cell (content, notebook, type) VALUES (:content, :notebookId, :type))
  $$$QuitOnError(##class(dc.myapp.util.MLInstaller).QuitOnSQLError(SQLCODE))
  Set pId = %ROWID
  return sc
}

}
