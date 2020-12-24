Class dc.myapp.model.Cell Extends (%Persistent, Form.Adaptor, %Populate)
{

Parameter FORMNAME = "Cell";

Parameter OBJPERMISSIONS As %String = "CRUD";

Parameter DISPLAYPROPERTY As %String = "content";

Parameter FORMORDERBY As %String = "content";

Property type As %String;

Property content As %String(COLLATION = "TRUNCATE(250)", MAXLEN = 10000);

Relationship notebook As dc.myapp.model.Notebook(%JSONINCLUDE = "INOUT", %JSONREFERENCE = "ID") [ Cardinality = one, Inverse = cells, OnDelete = cascade ];

ClassMethod toJSONString(id As %Integer = "", ByRef json) As %Status
{
  set sc = $$$OK
  set obj = ..%OpenId(id,,.sc)
  $$$QuitOnError(obj.%JSONExportToString(.json))
  return sc
}

Storage Default
{
<Data name="CellDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>type</Value>
</Value>
<Value name="3">
<Value>content</Value>
</Value>
<Value name="4">
<Value>notebook</Value>
</Value>
</Data>
<DataLocation>^dc.myapp.model.CellD</DataLocation>
<DefaultData>CellDefaultData</DefaultData>
<IdLocation>^dc.myapp.model.CellD</IdLocation>
<IndexLocation>^dc.myapp.model.CellI</IndexLocation>
<StreamLocation>^dc.myapp.model.CellS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
