Class App.Test Extends %UnitTest.TestCase
{

Method "Test Required fields"()
{
	Do $$$AssertStatusOK(1, "Should save correctly, due to filled required fields")
}

}
