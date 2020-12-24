Class dc.myapp.model.Notebook Extends (%Persistent, Form.Adaptor, %Populate)
{

// Parameter INFO = "id AS _id, name As displayName, dob";

Parameter FORMNAME = "Notebook";

Parameter OBJPERMISSIONS As %String = "CRUD";

/// name is a field used as a basic info about this form object
Parameter DISPLAYPROPERTY As %String = "name";

Parameter FORMORDERBY As %String = "name";

Property name As %String(COLLATION = "TRUNCATE(250)", MAXLEN = 2000) [ Required ];

Relationship cells As dc.myapp.model.Cell(%JSONREFERENCE = "ID") [ Cardinality = many, Inverse = notebook ];

Index idxName On name [ Unique ];

/// 
/// This classmethod is used in the RESTForms2 query /form/objects/App.Data.Show/find
ClassMethod queryFIND() As %String
{
  Quit "Id,name"
}

/// Create an object from JSON
ClassMethod createFromJSON(jsonInput, Output obj) As %Status
{
	set sc = $$$OK

  #Dim obj As dc.myapp.model.Notebook
	Set obj = ..%New()

  #Dim jsonInput As %CSP.CharacterStream
  $$$QuitOnError(jsonInput.Rewind())
  Set json = jsonInput.Read(jsonInput.Size, .sc)
  $$$QuitOnError(sc)

  #Dim notebook = {}.%FromJSON(json)
  #Dim cells As %DynamicArray = notebook.cells
  Set iter = cells.%GetIterator()
  While iter.%GetNext(.key , .cell) {
    Do cell.%Remove("id")
    Set cell.notebook = obj.%Id()
    $$$TOE(st, ##class(dc.myapp.model.Cell).createFromJSON(cell.%ToJSON(), .objCell))
    Do obj.cells.Insert(objCell)
  }

  Do notebook.%Remove("id")
  Set notebook.cells = []
	$$$QuitOnError(obj.%JSONImport(notebook.%ToJSON(), $parameter(obj, "FORMCREATEMAPPING")))
  $$$QuitOnError(obj.%Save())

  return sc
}

/// Read object and export to JSON
ClassMethod toJSON(id As %Integer = "") As %Status
{
	Set sc = $$$OK
	Set obj = ..%OpenId(id,,.sc)

  Set cells = []
  For i = 1:1:obj.cells.Count() {
    Set cellId = obj.cells.GetAt(i).%Id()
    $$$QuitOnError(##class(dc.myapp.model.Cell).toJSONString(cellId, .json))
    Set cell = {}.%FromJSON(json)
    Set cell.id = cellId
    Do cells.%Push(cell)
  }
  
	$$$QuitOnError(sc)
	$$$QuitOnError(obj.%JSONExportToString(.json))
  Set notebook = {}.%FromJSON(json)
  Set notebook.cells = cells
  Set notebook.id = obj.%Id()
  Write notebook.%ToJSON()

	Quit sc
}

/// Update object from JSON
ClassMethod updateFromJSON(id As %String, jsonInput, Output obj) As %Status
{
	set sc = $$$OK
  
  #Dim obj As dc.myapp.model.Notebook
	set obj = ..%OpenId(id,,.sc)
	$$$QuitOnError(sc)

  #Dim jsonInput As %CSP.CharacterStream
  $$$QuitOnError(jsonInput.Rewind())
  Set json = jsonInput.Read(jsonInput.Size, .sc)
  $$$QuitOnError(sc)

  Set cellKey = ""
  Do {
    Set cellORef = obj.cells.GetNext(.cellKey)
    If ($ISOBJECT(cellORef)) {
      $$$TOE(st, cellORef.%DeleteId(cellORef.%Id()))
    }
  } While($ISOBJECT(cellORef))
  Do obj.cells.Clear()

  #Dim notebook = {}.%FromJSON(json)
  #Dim cells As %DynamicArray = notebook.cells
  Set iter = cells.%GetIterator()
  While iter.%GetNext(.key , .cell) {
    Do cell.%Remove("id")
    Set cell.notebook = obj.%Id()
    $$$TOE(st, ##class(dc.myapp.model.Cell).createFromJSON(cell.%ToJSON(), .objCell))
    #; Do obj.cells.Insert(objCell)
  }
  #; #Dim cells As %DynamicArray = notebook.cells
  #; Set iter = cells.%GetIterator()
  #; While iter.%GetNext(.key , .cell) {
  #;   // todo:
  #;   If (achou) {
  #;     $$$TOE(st, ##class(dc.myapp.model.Cell).updateFromJSON(cell.%Id(), cell.%ToJSON(), .objCell))
  #;     Do obj.cells.Insert(objCell)
  #;   } Else {
  #;     Do obj.cell.Remove(cell.%Id())
  #;   }
  #; }

  Do notebook.%Remove("id")
  Set notebook.cells = []
	$$$QuitOnError(obj.%JSONImport(notebook.%ToJSON(), $parameter(obj, "FORMUPDATEMAPPING")))
	$$$QuitOnError(obj.%Save())
	Quit sc
}

Storage Default
{
<Data name="NotebookDefaultData">
<Value name="1">
<Value>%%CLASSNAME</Value>
</Value>
<Value name="2">
<Value>name</Value>
</Value>
</Data>
<DataLocation>^dc.myapp.model.NotebookD</DataLocation>
<DefaultData>NotebookDefaultData</DefaultData>
<IdLocation>^dc.myapp.model.NotebookD</IdLocation>
<IndexLocation>^dc.myapp.model.NotebookI</IndexLocation>
<StreamLocation>^dc.myapp.model.NotebookS</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
