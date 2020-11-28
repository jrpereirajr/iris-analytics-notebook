Class UnitTest.dc.myapp.forms.NotebookFromTest Extends %UnitTest.TestCase
{

/// Set ^UnitTestRoot = "/app/tests"
/// Do ##class(%UnitTest.Manager).RunTest()
ClassMethod Run()
{
  Do ##class(%UnitTest.Manager).DebugRunTestCase(..%ClassName(1))
}

Method OnBeforeOneTest(testname As %String) As %Status
{
  Tstart 
  Quit $$$OK
}

Method OnAfterOneTest(testname As %String) As %Status
{
  Trollback 
  Quit $$$OK
}

Method "Test Required fields"()
{
  Set notebook = ##class(dc.myapp.forms.NotebookForm).%New()
  Do $$$AssertStatusNotOK(notebook.%Save(), "Shouldn't save, due to empty required fields")

  #; Fill Required fields
  Set notebook.Name = ##class(%PopulateUtils).String()
  #; Set notebook.Brand = ##class(%PopulateUtils).String()
  Do $$$AssertStatusOK(notebook.%Save(), "Should save correctly, due to filled required fields")
}

}
