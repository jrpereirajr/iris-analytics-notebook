Class dc.myapp.model.MedicalAppointmentsStage Extends %Persistent
{

Property Especialidad As %Integer;

Property Edad As %Integer;

Property Sexo As %Integer(DISPLAYLIST = ",Male,Female", VALUELIST = ",1,2");

Property ReservaMesD As %Integer;

Property ReservaDiaD As %Integer;

Property ReservaHoraD As %Integer;

Property CreacionMesD As %Integer;

Property CreacionDiaD As %Integer;

Property CreacionHoraD As %Integer;

Property Latencia As %Integer;

Property Canal As %Integer(DISPLAYLIST = ",Call center,Personal,Web", VALUELIST = ",1,2,3");

Property Tipo As %Integer(DISPLAYLIST = ",Medical,Procedure", VALUELIST = ",1,2");

Property Show As %Boolean;

Index idxShow On Show;

Storage Default
{
<Data name="MedicalAppointmentsStageDefaultData">
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
<Value>ReservaMesD</Value>
</Value>
<Value name="6">
<Value>ReservaDiaD</Value>
</Value>
<Value name="7">
<Value>ReservaHoraD</Value>
</Value>
<Value name="8">
<Value>CreacionMesD</Value>
</Value>
<Value name="9">
<Value>CreacionDiaD</Value>
</Value>
<Value name="10">
<Value>CreacionHoraD</Value>
</Value>
<Value name="11">
<Value>Latencia</Value>
</Value>
<Value name="12">
<Value>Canal</Value>
</Value>
<Value name="13">
<Value>Tipo</Value>
</Value>
<Value name="14">
<Value>Show</Value>
</Value>
</Data>
<DataLocation>^dc.myapp.m4691.MedicalAppo5342D</DataLocation>
<DefaultData>MedicalAppointmentsStageDefaultData</DefaultData>
<IdLocation>^dc.myapp.m4691.MedicalAppo5342D</IdLocation>
<IndexLocation>^dc.myapp.m4691.MedicalAppo5342I</IndexLocation>
<StreamLocation>^dc.myapp.m4691.MedicalAppo5342S</StreamLocation>
<Type>%Storage.Persistent</Type>
}

}
