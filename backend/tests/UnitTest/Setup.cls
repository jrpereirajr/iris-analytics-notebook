Class UnitTest.Setup
{

ClassMethod EnableUnitTestForNS(pNamespaceAppName As %String)
{
  Set:(pNamespaceAppName = "") pNamespaceAppName = $ZConvert(pNamespaceAppName, "L")
  Set ^SYS("Security","CSP","AllowPrefix","/csp/"_pNamespaceAppName_"/","%UnitTest.")=1
}

ClassMethod SetUnitTestDirectory(pDiretory As %String) As %Status
{
  Set ^UnitTestRoot = pDiretory
}

ClassMethod Execute() As %Status
{
  Do ##class(%UnitTest.Manager).RunTest()
}

ClassMethod Run() As %Status
{
  Do ..EnableUnitTestForNS("myapp")
  Do ..SetUnitTestDirectory("/app/tests")
}

}
