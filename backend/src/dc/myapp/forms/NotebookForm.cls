Class dc.myapp.forms.NotebookForm Extends (%Persistent, Form.Adaptor, %Populate)
{

// Parameter INFO = "id AS _id, name As displayName, dob";

Parameter FORMNAME = "Notebook";

Parameter OBJPERMISSIONS As %String = "CRUD";

/// Name is a field used as a basic info about this form object
Parameter DISPLAYPROPERTY As %String = "Name";

Parameter FORMORDERBY As %String = "Name";

// Parameter FORMCREATEMAPPING As %String;

// Parameter FORMREADMAPPING As %String;

// Parameter FORMUPDATEMAPPING As %String;

Property Name As %String(COLLATION = "TRUNCATE(250)", DISPLAYNAME = "Name", MAXLEN = 2000) [ Required ];

/// 
/// This classmethod is used in the RESTForms2 query /form/objects/App.Data.Show/find
ClassMethod queryFIND() As %String
{
  quit "Name name "
}

Storage Default
{
<Data name="NotebookFormDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>Name</Value>
</Value>
</Data>
<DataLocation>^dc.myapp.forms.NotebookFormD</DataLocation>
<DefaultData>NotebookFormDefaultData</DefaultData>
<IdLocation>^dc.myapp.forms.NotebookFormD</IdLocation>
<IndexLocation>^dc.myapp.forms.NotebookFormI</IndexLocation>
<StreamLocation>^dc.myapp.forms.NotebookFormS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
