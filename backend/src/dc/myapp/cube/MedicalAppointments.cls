/// 
Class dc.myapp.cube.MedicalAppointments Extends %DeepSee.CubeDefinition [ DependsOn = dc.myapp.model.MedicalAppointments, ProcedureBlock ]
{

/// Cube definition from Architect.
XData Cube [ XMLNamespace = "http://www.intersystems.com/deepsee" ]
{
<cube xmlns="http://www.intersystems.com/deepsee" name="MedicalAppointments" displayName="MedicalAppointments" disabled="false" abstract="false" sourceClass="dc.myapp.model.MedicalAppointments" namedFactNums="true" countMeasureName="%COUNT" bucketSize="8" bitmapChunkInMemory="false" precompute="0" disableListingGroups="false" enableSqlRestrict="false">
  <dimension name="BookDateD" displayName="Book Date" disabled="false" hasAll="false" allCaption="All ReservaDate" allDisplayName="ReservaDate" sourceProperty="ReservaDate" type="time" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="BookDate" displayName="Book Date" disabled="false" timeFunction="DayMonthYear" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="2">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="BookHourD" displayName="Book Hour" disabled="false" hasAll="false" allCaption="All ReservaHora" allDisplayName="ReservaHora" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="BookHour" displayName="Book Hour" disabled="false" sourceProperty="ReservaHora" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="3">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="CreationDateD" displayName="Creation Date" disabled="false" hasAll="false" allCaption="All CreacionDate" allDisplayName="CreacionDate" sourceProperty="CreacionDate" type="time" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="CreationDate" displayName="Creation Date" disabled="false" timeFunction="DayMonthYear" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="4">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="CreationHourD" displayName="Creation Hour" disabled="false" hasAll="false" allCaption="All CreacionHora" allDisplayName="CreacionHora" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="CreationHour" displayName="Creation Hour" disabled="false" sourceProperty="CreacionHora" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="5">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="BookMethodD" displayName="Book Method" disabled="false" hasAll="false" allCaption="All Canal" allDisplayName="Canal" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="BookMethod" displayName="Book Method" disabled="false" sourceProperty="Canal" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="6">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="AgeD" displayName="Age" disabled="false" hasAll="false" allCaption="All Edad" allDisplayName="Edad" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="Age" displayName="Age" disabled="false" sourceProperty="Edad" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="7">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="MedicalSpecialtyD" displayName="Medical Specialty" disabled="false" hasAll="false" allCaption="All Especialidad" allDisplayName="Especialidad" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="MedicalSpecialty" displayName="Medical Specialty" disabled="false" sourceProperty="Especialidad" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="8">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="LatencyD" displayName="Latency" disabled="false" hasAll="false" allCaption="All Latencia" allDisplayName="Latencia" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="LatencyGroup" displayName="Latency Group" disabled="false" sourceExpression="$LG($LB(&quot;0 to 10&quot;,&quot;11 to 20&quot;,&quot;21 to 30&quot;,&quot;31 to 40&quot;,&quot;41 to 50&quot;,&quot;51 to 60&quot;,&quot;61 to 70&quot;,&quot;71 to 80&quot;,&quot;81 to 90&quot;,&quot;91 to 100&quot;), (%source.Latencia\10)+1)" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="14">
      </level>
      <level name="Latency" displayName="Latency" disabled="false" sourceProperty="Latencia" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="9">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="GenderD" displayName="Gender" disabled="false" hasAll="false" allCaption="All Sexo" allDisplayName="Sexo" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="Gender" displayName="Gender" disabled="false" sourceProperty="Sexo" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="10">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="BookTypeD" displayName="Book Type" disabled="false" hasAll="false" allCaption="All Tipo" allDisplayName="Tipo" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="BookType" displayName="Book Type" disabled="false" sourceProperty="Tipo" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="11">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="ShowD" displayName="Show" disabled="false" hasAll="false" allCaption="All Show" allDisplayName="Show" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="Show" displayName="Show" disabled="false" sourceExpression="$Case(%source.Show, 0:&quot;No show&quot;, 1:&quot;Show&quot;, :&quot;&quot;)" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="12">
      </level>
    </hierarchy>
  </dimension>
  <dimension name="PredictedShowD" displayName="Predicted Show" disabled="false" hasAll="false" allCaption="All Show1" allDisplayName="Show1" type="data" calendar="gregorian" iKnowType="entity" hidden="false" showHierarchies="default">
    <hierarchy name="H1" disabled="false" hidden="false">
      <level name="PredictedShow" displayName="Predicted Show" disabled="false" sourceExpression="##class(dc.myapp.model.MedicalAppointments).PredictMedicalAppointmentClass(%source.%ID)" list="false" useDisplayValue="true" useAsFilter="true" hidden="false" factNumber="13">
      </level>
    </hierarchy>
  </dimension>
</cube>
}

Parameter DOMAIN;

}
