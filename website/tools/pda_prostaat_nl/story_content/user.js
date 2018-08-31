function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6bc4WaVfhSM":
        Script1();
        break;
      case "6BAYkApQhoo":
        Script2();
        break;
      case "6UggkagCRfl":
        Script3();
        break;
      case "6PIevhvRXLD":
        Script4();
        break;
      case "5cZjpDfvi1L":
        Script5();
        break;
      case "6c8VBDkIci0":
        Script6();
        break;
      case "6BZ6cc99sSg":
        Script7();
        break;
      case "5moTyJS6uhL":
        Script8();
        break;
  }
}

function Script1()
{
  // GET INPUT
var player = GetPlayer();
var input = player.GetVar("Profile_Geboortedatum");

// GET CURRENT DATE
var date = new Date();
var todayDay = date.getDate();
var todayMonth = (date.getMonth()) + 1;
var todayYear = date.getFullYear();

// GET DATE OF BIRTH
var res = input.split("/");
var dobDay = res[0];
var dobMonth = res[1];
var dobYear = res[2];

// CHECK IF VALUES OR OK
if(dobDay < 1 || dobDay > 31 || isNaN(dobDay) || isNotInt(dobDay)){ 
    alert("Voer een geldige dag in!");
    player.SetVar("Profile_Leeftijd", 0 );
    return false; 
}
if(dobMonth < 1 || dobMonth > 12 || isNaN(dobMonth) || isNotInt(dobMonth)){ 
    alert("Voer een geldige maand in!");
    player.SetVar("Profile_Leeftijd", 0 );
    return false; 
}
if(dobYear < 1900 || dobYear > todayYear || isNaN(dobYear) || isNotInt(dobYear)){ 
    alert("Voer een geldig jaar in!");
    player.SetVar("Profile_Leeftijd", 0 );
    return false; 
}

// CALCULATE AGE
var ageDay = todayDay - dobDay;
var ageMonth = todayMonth - dobMonth;
var ageYear = todayYear - dobYear;

// CORRECT FOR DAYS & MONTHS IN CURRENT YEAR
if(ageDay < 0 ) { ageMonth -= 1;}
if(ageMonth <0 ) { ageYear -= 1;}

player.SetVar("Profile_Leeftijd",ageYear);

function isNotInt(value){
  if((parseFloat(value) == parseInt(value)) && !isNaN(value)){
      return false;
  } else {
      return true;
    }
}

}

function Script2()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Complicaties","Plasklachten","Darmklachten","Erectieproblem"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>Ongeveer de helft van de patienten krijgt enkele plasklachten. Deze verdwijnen over het algemeen in de eerste drie weken na de laatste bestraling.</td>";
    contentRadiotherapie += "<td>Na twee jaar had nog 16% van de patienten nog last van spontane drang. Van de patienten had 10% erg vaak ontlasting. Ongeveer 15% van de patienten had verschillende darmklachten na twee jaar. </td>";
    contentRadiotherapie += "<td>Na twee jaar heeft 66% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>Urineverlies komt vaak voor na operatie, bij 66% van de patienten in het eerste jaar. 5% van de patienten wordt volledig incontinent.</td>";
    contentOperatie += "<td >Komen niet voor.</td>";
    contentOperatie += "<td>Na twee jaar heeft 80% van de patienten erectieproblemen, varierend van niet meer tsijf tot niet betrouwbaar genoeg.</td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td>";
    contentActiefVolgen += "<td>Kans op infecties door het afnemen van biopten.</td>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>In de eerste twee maanden worden plasklachten, zoals pijn en vaker moeten plassen bji 65% van de patienten gezien. Na deze periode verbetert dit snel (20% na twee jaar).</td>";
    contentBrachytherapie += "<td>Darmklachten door behandeling komen niet vaak voor.</td>";
    contentBrachytherapie += "<td>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";

var contentHormoontherapie = "</table><table style='text-align:left; font-family: Asap, sans-serif'>";
	contentHormoontherapie += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'><th>Lange Termijn</th><th>Korte Termijn:</th></tr>";
	contentHormoontherapie += "<TR><td><ul><li>Stemmingswisselingen</li><li>Botontkalking met verhoogd risico op botfracturen</li><li>Spierzwakte</li><li>Verhoogde kans op bloedklontering</li><li>Verhoogde kans op ontregeling van suiker in het bloed</li><li>Vermoeidheid</li></ul></td>";
	contentHormoontherapie += "<td><ul><li>Erectieproblemen</li><li>Warmte opwellingen</li></ul></td></tr>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie + contentHormoontherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script3()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Complicaties","Plasklachten","Darmklachten","Erectieproblem"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>Ongeveer de helft van de patienten krijgt enkele plasklachten. Deze verdwijnen over het algemeen in de eerste drie weken na de laatste bestraling.</td>";
    contentRadiotherapie += "<td>Na twee jaar had nog 16% van de patienten nog last van spontane drang. Van de patienten had 10% erg vaak ontlasting. Ongeveer 15% van de patienten had verschillende darmklachten na twee jaar. </td>";
    contentRadiotherapie += "<td>Na twee jaar heeft 66% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>Urineverlies komt vaak voor na operatie, bij 66% van de patienten in het eerste jaar. 5% van de patienten wordt volledig incontinent.</td>";
    contentOperatie += "<td >Komen niet voor.</td>";
    contentOperatie += "<td>Na twee jaar heeft 80% van de patienten erectieproblemen, varierend van niet meer tsijf tot niet betrouwbaar genoeg.</td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td>";
    contentActiefVolgen += "<td>Kans op infecties door het afnemen van biopten.</td>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>In de eerste twee maanden worden plasklachten, zoals pijn en vaker moeten plassen bji 65% van de patienten gezien. Na deze periode verbetert dit snel (20% na twee jaar).</td>";
    contentBrachytherapie += "<td>Darmklachten door behandeling komen niet vaak voor.</td>";
    contentBrachytherapie += "<td>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";

var contentHormoontherapie = "</table><table style='text-align:left; font-family: Asap, sans-serif'>";
	contentHormoontherapie += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'><th>Lange Termijn</th><th>Korte Termijn:</th></tr>";
	contentHormoontherapie += "<TR><td><ul><li>Stemmingswisselingen</li><li>Botontkalking met verhoogd risico op botfracturen</li><li>Spierzwakte</li><li>Verhoogde kans op bloedklontering</li><li>Verhoogde kans op ontregeling van suiker in het bloed</li><li>Vermoeidheid</li></ul></td>";
	contentHormoontherapie += "<td><ul><li>Erectieproblemen</li><li>Warmte opwellingen</li></ul></td></tr>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie + contentHormoontherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script4()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Complicaties","Plasklachten","Darmklachten","Erectieproblem"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>Ongeveer de helft van de patienten krijgt enkele plasklachten. Deze verdwijnen over het algemeen in de eerste drie weken na de laatste bestraling.</td>";
    contentRadiotherapie += "<td>Na twee jaar had nog 16% van de patienten nog last van spontane drang. Van de patienten had 10% erg vaak ontlasting. Ongeveer 15% van de patienten had verschillende darmklachten na twee jaar. </td>";
    contentRadiotherapie += "<td>Na twee jaar heeft 66% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>Urineverlies komt vaak voor na operatie, bij 66% van de patienten in het eerste jaar. 5% van de patienten wordt volledig incontinent.</td>";
    contentOperatie += "<td >Komen niet voor.</td>";
    contentOperatie += "<td>Na twee jaar heeft 80% van de patienten erectieproblemen, varierend van niet meer tsijf tot niet betrouwbaar genoeg.</td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td>";
    contentActiefVolgen += "<td>Kans op infecties door het afnemen van biopten.</td>";
    contentActiefVolgen += "<td>Geen klachten vanwege een behandeling.</td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>In de eerste twee maanden worden plasklachten, zoals pijn en vaker moeten plassen bji 65% van de patienten gezien. Na deze periode verbetert dit snel (20% na twee jaar).</td>";
    contentBrachytherapie += "<td>Darmklachten door behandeling komen niet vaak voor.</td>";
    contentBrachytherapie += "<td>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</td></TR>";

var contentHormoontherapie = "</table><table style='text-align:left; font-family: Asap, sans-serif'>";
	contentHormoontherapie += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'><th>Lange Termijn</th><th>Korte Termijn:</th></tr>";
	contentHormoontherapie += "<TR><td><ul><li>Stemmingswisselingen</li><li>Botontkalking met verhoogd risico op botfracturen</li><li>Spierzwakte</li><li>Verhoogde kans op bloedklontering</li><li>Verhoogde kans op ontregeling van suiker in het bloed</li><li>Vermoeidheid</li></ul></td>";
	contentHormoontherapie += "<td><ul><li>Erectieproblemen</li><li>Warmte opwellingen</li></ul></td></tr>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie + contentHormoontherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script5()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Behandelingen","Samenvatting","","Complicaties"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>De prostaat wordt minimaal vijf weken lang, vier keer per week, van buiten het lichaam bestraald.</td>";
    contentRadiotherapie += "<td><ul><li>4-5 dagen per week, minimaal 5 weken lang bestraald worden.</li><li>Moeilijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Kans op darmklachten.</li><li>Geen ziekenhuisopname.</li></ul></td>";
    contentRadiotherapie += "<td><u><li>Erectieproblemen (42% na twee jaar).</li><li>Verschillende darmklachten (15% na twee jaar).</li></ul></td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>De prostaat en zaadblaasjes worden verwijderd. Er wordt een nieuwe verbinding gemaakt tussende blaas en plasbuis.</td>";
    contentOperatie += "<td><ul><li>Prostaat wordt verwijderd.</li><li>Lymfeklieren kunnen worden gecontroleerd op uitzaaiingen.</li><li>Risico op infecties door operatie.</li><li>Ziekenhuisopname van twee tot tien dagen.</li></ul></td>";
    contentOperatie += "<td><ul><li>Erectieproblemen (60% na twee jaar).</li><li>Urineverlies (na twee jaar is 5% permanent incontinent, 20% heeft een urinepad nodig).</li></ul></td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Regelmatig (elke drie tot zes maanden) onderzoeken en testen ondergaan. Pas wanneer de kanker zich verder heeft ontwikkeld zult een een actieve behandeling kiezen.</td>";
    contentActiefVolgen += "<td><ul><li>Geen ingreep / interventie</li><li>Daardoor geen fysieke complicaties.</li><li>Geen ziekenhuisopname vereist.</li><li>De kanker kan onverwacht sneller gaan groeien.</li></ul></td>";
    contentActiefVolgen += "<td><ul><li>De tumor niet actief behandelen wordt door sommige mensen ervaren als een zware psychologische last.</li></ul></td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>Radioactieve bronnen ('Zaadjes') worden via naalden in de prostaat gepositioneerd.</td>";
    contentBrachytherapie += "<td><ul><li>Radioactieve zaadjes in de prostaat.</li><li>moeiijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Grote kans op milde plasklachten.</li><li>Dagopname.</li></ul></td>";
    contentBrachytherapie += "<td><ul><li>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</li></ul></td></TR>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script6()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Behandelingen","Samenvatting","","Complicaties"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>De prostaat wordt minimaal vijf weken lang, vier keer per week, van buiten het lichaam bestraald.</td>";
    contentRadiotherapie += "<td><ul><li>4-5 dagen per week, minimaal 5 weken lang bestraald worden.</li><li>Moeilijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Kans op darmklachten.</li><li>Geen ziekenhuisopname.</li></ul></td>";
    contentRadiotherapie += "<td><u><li>Erectieproblemen (42% na twee jaar).</li><li>Verschillende darmklachten (15% na twee jaar).</li></ul></td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>De prostaat en zaadblaasjes worden verwijderd. Er wordt een nieuwe verbinding gemaakt tussende blaas en plasbuis.</td>";
    contentOperatie += "<td><ul><li>Prostaat wordt verwijderd.</li><li>Lymfeklieren kunnen worden gecontroleerd op uitzaaiingen.</li><li>Risico op infecties door operatie.</li><li>Ziekenhuisopname van twee tot tien dagen.</li></ul></td>";
    contentOperatie += "<td><ul><li>Erectieproblemen (60% na twee jaar).</li><li>Urineverlies (na twee jaar is 5% permanent incontinent, 20% heeft een urinepad nodig).</li></ul></td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Regelmatig (elke drie tot zes maanden) onderzoeken en testen ondergaan. Pas wanneer de kanker zich verder heeft ontwikkeld zult een een actieve behandeling kiezen.</td>";
    contentActiefVolgen += "<td><ul><li>Geen ingreep / interventie</li><li>Daardoor geen fysieke complicaties.</li><li>Geen ziekenhuisopname vereist.</li><li>De kanker kan onverwacht sneller gaan groeien.</li></ul></td>";
    contentActiefVolgen += "<td><ul><li>De tumor niet actief behandelen wordt door sommige mensen ervaren als een zware psychologische last.</li></ul></td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>Radioactieve bronnen ('Zaadjes') worden via naalden in de prostaat gepositioneerd.</td>";
    contentBrachytherapie += "<td><ul><li>Radioactieve zaadjes in de prostaat.</li><li>moeiijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Grote kans op milde plasklachten.</li><li>Dagopname.</li></ul></td>";
    contentBrachytherapie += "<td><ul><li>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</li></ul></td></TR>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script7()
{
  var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Behandelingen","Samenvatting","","Complicaties"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_risk");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Bestraling</th>";
    contentRadiotherapie += "<td>De prostaat wordt minimaal vijf weken lang, vier keer per week, van buiten het lichaam bestraald.</td>";
    contentRadiotherapie += "<td><ul><li>4-5 dagen per week, minimaal 5 weken lang bestraald worden.</li><li>Moeilijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Kans op darmklachten.</li><li>Geen ziekenhuisopname.</li></ul></td>";
    contentRadiotherapie += "<td><u><li>Erectieproblemen (42% na twee jaar).</li><li>Verschillende darmklachten (15% na twee jaar).</li></ul></td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>De prostaat en zaadblaasjes worden verwijderd. Er wordt een nieuwe verbinding gemaakt tussende blaas en plasbuis.</td>";
    contentOperatie += "<td><ul><li>Prostaat wordt verwijderd.</li><li>Lymfeklieren kunnen worden gecontroleerd op uitzaaiingen.</li><li>Risico op infecties door operatie.</li><li>Ziekenhuisopname van twee tot tien dagen.</li></ul></td>";
    contentOperatie += "<td><ul><li>Erectieproblemen (60% na twee jaar).</li><li>Urineverlies (na twee jaar is 5% permanent incontinent, 20% heeft een urinepad nodig).</li></ul></td></TR>";
var contentActiefVolgen = "<TR style='vertical-align:top; padding:5px;'><th>Actief Volgen</th>";
    contentActiefVolgen += "<td>Regelmatig (elke drie tot zes maanden) onderzoeken en testen ondergaan. Pas wanneer de kanker zich verder heeft ontwikkeld zult een een actieve behandeling kiezen.</td>";
    contentActiefVolgen += "<td><ul><li>Geen ingreep / interventie</li><li>Daardoor geen fysieke complicaties.</li><li>Geen ziekenhuisopname vereist.</li><li>De kanker kan onverwacht sneller gaan groeien.</li></ul></td>";
    contentActiefVolgen += "<td><ul><li>De tumor niet actief behandelen wordt door sommige mensen ervaren als een zware psychologische last.</li></ul></td></TR>";
var contentBrachytherapie = "<TR style='vertical-align:top; padding:5px; background-color: #f2f2f2'><th>Brachytherapie</th>";
    contentBrachytherapie += "<td>Radioactieve bronnen ('Zaadjes') worden via naalden in de prostaat gepositioneerd.</td>";
    contentBrachytherapie += "<td><ul><li>Radioactieve zaadjes in de prostaat.</li><li>moeiijk om de lymfeklieren te controleren op uitzaaiingen.</li><li>Grote kans op milde plasklachten.</li><li>Dagopname.</li></ul></td>";
    contentBrachytherapie += "<td><ul><li>Na twee jaar heeft 37% van de patienten erectieproblemen, varierend van niet meer stijf tot niet betrouwbaar genoeg.</li></ul></td></TR>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentActiefVolgen + contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 2 :
			tableOutput = contentBrachytherapie + contentOperatie + contentRadiotherapie;
			return tableOutput;
		case 3 :
			tableOutput = contentOperatie + contentRadiotherapie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script8()
{
  //////////////////////////////////////////////////
//// -  -  -  PRINTING RESULT SLIDE  -  -  -  ////
//// -  - PROSTATE PATIENT DECISION AID -  -  ////
//// -  -  -  -  MAASTRO CLINIC   -  -  -  -  ////
//////////////////////////////////////////////////

var myWindow = window.open("","Print","width=500,height=800,scrollbars=1,resizable=1");
var player = GetPlayer();

//// DECLARE ALL THE VARIABLES
var i;
var contents;
var subjectQuestionsSurgery = ["Risico's","Erectieproblemen","Urineverlies","Eenmalige zware ingreep", "2 tot 10 dagen ziekenhuis", "Narcose"];
var subjectQuestionsBrachytherapy = ["Lymfeklieren controle","Langer wachten op resultaten","2 Maanden vaker plassen 's nachts","Erectieproblemen", "Voor altijd inwendige zaadjes", "Eenmalige behandeling", "Narcose"];
var subjectQuestionsRadiotherapy = ["Langer wachten op resultaten","Lymfeklieren controle","Erectieproblemen","Vaker spontaan poepen", "5 Weken, 4x4 dagen", "Bij bewustzijn"];
var subjectQuestionsActiveSurveillance = ["Onzekerheid","Testen","Infectie Risico's","Geen verdoving"];

var profile = {
    name : "",
    age : "",
    risk : "",
    hospital : "",
    question : ""
};

profile.name = player.GetVar("Profile_name");
profile.age = player.GetVar("Profile_Geboortedatum");
profile.risk = player.GetVar("Profile_risk");
profile.hospital  = player.GetVar("Profile_ziekenhuis");
profile.question = player.GetVar("Profile_customQuestion");

var printingCheckmarks = [];
printingCheckmarks[0] = player.GetVar("faqCheckmark_01");
printingCheckmarks[1] = player.GetVar("faqCheckmark_02");
printingCheckmarks[2] = player.GetVar("faqCheckmark_03");
printingCheckmarks[3] = player.GetVar("faqCheckmark_04");
printingCheckmarks[4] = player.GetVar("faqCheckmark_05");
printingCheckmarks[5] = player.GetVar("faqCheckmark_06");
printingCheckmarks[6] = player.GetVar("faqCheckmark_07");
printingCheckmarks[7] = player.GetVar("faqCheckmark_08");

var printingQuestions = [];
printingQuestions[0] = "Wat zijn mijn PSA-gehalte, Gleasonscore en tumorstadium?";
printingQuestions[1] = "Wat voor invloed heeft leeftijd op mijn behandeling?";
printingQuestions[2] = "Hoe kan mijn algemene gezondheid de behandeling beïnvloeden?";
printingQuestions[3] = "Met welke behandeling heb ik de beste kansen? ";
printingQuestions[4] = "Kan ik echt alle behandelopties kiezen?";
printingQuestions[5] = "Hoelang kunnen de bijwerkingen aanhouden?";
printingQuestions[6] = "Ben ik nog steeds vruchtbaar na de behandeling?";
printingQuestions[7] = "Welke hulp ontvang ik na mijn behandeling?";

var knowledgeQuestions = [];
knowledgeQuestions[0] = player.GetVar("Kennistest_V1");
knowledgeQuestions[1] = player.GetVar("Kennistest_V2");
knowledgeQuestions[2] = player.GetVar("Kennistest_V3");
knowledgeQuestions[3] = player.GetVar("Kennistest_V4");
knowledgeQuestions[4] = player.GetVar("Kennistest_V5");
knowledgeQuestions[5] = player.GetVar("Kennistest_V6");
knowledgeQuestions[6] = player.GetVar("Kennistest_V7");
knowledgeQuestions[7] = player.GetVar("Kennistest_V8");
knowledgeQuestions[8] = player.GetVar("Kennistest_V9");
knowledgeQuestions[9] = player.GetVar("Kennistest_V10");

var knowledgeSubjects = [];
knowledgeSubjects[0] = "Operatie: Als u voor een operatie kiest, zal uw tumor met radioactieve straling worden behandeld.";
knowledgeSubjects[1] = "Operatie: Erectieproblemen en urineverlies zijn de meestvoorkomende complicaties na een operatie.";
knowledgeSubjects[2] = "Bestraling: Na inwendige bestraling en uitwendige bestraling zult u altijd een nacht in het ziekenhuis moeten doorbrengen.";
knowledgeSubjects[3] = "Operatie: Een operatie geeft een veel betere kans op genezing dan de andere behandelingen.";
knowledgeSubjects[4] = "Alle Behandelingen: De kans op erectieproblemen is na vijf jaar voor elke behandeling hetzelfde.";
knowledgeSubjects[5] = "Uitwendige Bestraling: Darmklachten en erectieproblemen zijn de meestvoorkomende complicaties bij uitwendige bestraling.";
knowledgeSubjects[6] = "Inwendige Bestraling: Inwendige bestraling heeft een slechter resultaat op lange termijn.";
knowledgeSubjects[7] = "Operatie: Darmklachten komen minder vaak voor na een operatie dan bij uitwendige bestraling.";
knowledgeSubjects[8] = "Alle Behandelingen: Vrijwel alle complicaties zijn blijvend en zullen niet verminderen na afloop van de behandeling.";
knowledgeSubjects[9] = "Uitwendige Bestraling: Door uitwendige bestraling raakt u sneller vermoeid en heeft u minder energie. Dit verbetert na verloop van tijd.";

var preferenceQuestionsSurgery = [];
preferenceQuestionsSurgery[0] = player.GetVar("Mijnvoorkeuren_risicosoperatie");
preferenceQuestionsSurgery[1] = player.GetVar("Mijnvoorkeuren_erectieprobleem");
preferenceQuestionsSurgery[2] = player.GetVar("Mijnvoorkeuren_urineverlies");
preferenceQuestionsSurgery[3] = player.GetVar("Mijnvoorkeuren_zwareingreep1x");
preferenceQuestionsSurgery[4] = player.GetVar("Mijnvoorkeuren_2tot10DGNziekenhuis");
preferenceQuestionsSurgery[5] = player.GetVar("Mijnvoorkeuren_narcose");

var preferenceQuestionsBrachytherapy = [];
preferenceQuestionsBrachytherapy[0] = player.GetVar("Mijnvoorkeuren_lymfeklierencontroleren");
preferenceQuestionsBrachytherapy[1] = player.GetVar("Mijnvoorkeuren_langerwachtenresultaten");
preferenceQuestionsBrachytherapy[2] = player.GetVar("Mijnvoorkeuren_2MNDplassensnachts");
preferenceQuestionsBrachytherapy[3] = player.GetVar("Mijnvoorkeuren_erectieprobleem");
preferenceQuestionsBrachytherapy[4] = player.GetVar("Mijnvoorkeuren_zaadjesvooraltijd");
preferenceQuestionsBrachytherapy[5] = player.GetVar("Mijnvoorkeuren_1xbehandeling");
preferenceQuestionsBrachytherapy[6] = player.GetVar("Mijnvoorkeuren_narcose");

var preferenceQuestionsRadiotherapy = [];
preferenceQuestionsRadiotherapy[0] = player.GetVar("Mijnvoorkeuren_langerwachtenresultaten");
preferenceQuestionsRadiotherapy[1] = player.GetVar("Mijnvoorkeuren_lymfeklierencontroleren");
preferenceQuestionsRadiotherapy[2] = player.GetVar("Mijnvoorkeuren_erectieprobleem");
preferenceQuestionsRadiotherapy[3] = player.GetVar("Mijnvoorkeuren_vakerspontaanpoepen");
preferenceQuestionsRadiotherapy[4] = player.GetVar("Mijnvoorkeuren_5weken4x4DGN");
preferenceQuestionsRadiotherapy[5] = player.GetVar("Mijnvoorkeuren_bijbewustzijn");

var preferenceQuestionsActiveSurveillance = [];
preferenceQuestionsActiveSurveillance[0] = player.GetVar("Mijnvoorkeuren_Onzekerheid");
preferenceQuestionsActiveSurveillance[1] = player.GetVar("Mijnvoorkeuren_Testen");
preferenceQuestionsActiveSurveillance[2] = player.GetVar("Mijnvoorkeuren_infecties");
preferenceQuestionsActiveSurveillance[3] = player.GetVar("Mijnvoorkeuren_bijbewustzijn");

var comparisonQuestionsSurgery = [];
comparisonQuestionsSurgery[0] = player.GetVar("Mijnvergelijking_3d");
comparisonQuestionsSurgery[1] = player.GetVar("Mijnvergelijking_4g");
comparisonQuestionsSurgery[2] = player.GetVar("Mijnvergelijking_3c");
comparisonQuestionsSurgery[3] = player.GetVar("Mijnvergelijking_1a");
comparisonQuestionsSurgery[4] = player.GetVar("Mijnvergelijking_1a");
comparisonQuestionsSurgery[5] = player.GetVar("Mijnvergelijking_2b");

var comparisonQuestionsBrachytherapy = [];
comparisonQuestionsBrachytherapy[0] = player.GetVar("Mijnvergelijking_3c");
comparisonQuestionsBrachytherapy[1] = player.GetVar("Mijnvergelijking_3a");
comparisonQuestionsBrachytherapy[2] = player.GetVar("Mijnvergelijking_4a");
comparisonQuestionsBrachytherapy[3] = player.GetVar("Mijnvergelijking_4g");
comparisonQuestionsBrachytherapy[4] = player.GetVar("Mijnvergelijking_4e");
comparisonQuestionsBrachytherapy[5] = player.GetVar("Mijnvergelijking_1b");
comparisonQuestionsBrachytherapy[6] = player.GetVar("Mijnvergelijking_2b");

var comparisonQuestionsRadiotherapy = [];
comparisonQuestionsRadiotherapy[0] = player.GetVar("Mijnvergelijking_3a");
comparisonQuestionsRadiotherapy[1] = player.GetVar("Mijnvergelijking_3c");
comparisonQuestionsRadiotherapy[2] = player.GetVar("Mijnvergelijking_4g");
comparisonQuestionsRadiotherapy[3] = player.GetVar("Mijnvergelijking_4b");
comparisonQuestionsRadiotherapy[4] = player.GetVar("Mijnvergelijking_1c");
comparisonQuestionsRadiotherapy[5] = player.GetVar("Mijnvergelijking_2a");

var comparisonQuestionsActiveSurveillance = [];
comparisonQuestionsActiveSurveillance[0] = player.GetVar("Mijnvergelijking_3b");
comparisonQuestionsActiveSurveillance[1] = player.GetVar("Mijnvergelijking_4f");
comparisonQuestionsActiveSurveillance[2] = player.GetVar("Mijnvergelijking_4d");
comparisonQuestionsActiveSurveillance[3] = player.GetVar("Mijnvergelijking_2a");

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
    contents = "<html><head></head><body>";
    contents +="<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'> ";
    contents +="<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents +="<div><h3 id='title' style='font-family: Arial, Helvetica, sans-serif;'>Behandeloptie Gesprek Formulier: " + profile.name + "</h3></div>";
    contents +="<b style='font-family: Arial, Helvetica, sans-serif;>Profiel:</b>";
    contents +="<p id='subtitle' style='font-family: Arial, Helvetica, sans-serif;'>U hebt een " + riskToText(profile.risk) + "  en wordt hiervoor in het " + hospitalToText(profile.hospital) + " behandeld.</p>";
    contents +="<p id='paragraph01' style='font-family: Arial, Helvetica, sans-serif;'>Voor u zijn de volgende behandelopties beschikbaar: " + profileToText(profile.risk) + "</p>";
    contents +="<p id='paragraph03' style='font-family: Arial, Helvetica, sans-serif;'>U heeft de volgende vragen nog opgeschreven voor de dokter: <BR><i>" + displayQuestions() +"</i></p>";
    contents +="<p id='paragraph04' style='font-family: Arial, Helvetica, sans-serif;'>In uw voorkeuren heeft u aangegeven dat deze onderwerpen zeer belangrijk voor u zijn:<BR><i>" + displayImpact(3) + "</i></p>";
    contents +="<p id='paragraph05' style='font-family: Arial, Helvetica, sans-serif;'>Uw resultaten stellen dat u deze aspecten minder belangrijk vindt:<BR><i>" + displayImpact(1) +"</i></p>";
    contents +="<BR><HR><BR>";
    contents += createKnowledgeTestTable();
    contents += "<BR>";
    contents += createLegenda();
    contents += createResultsTables();
    contents += "<BR><p id='ending' style='font-family: Arial, Helvetica, sans-serif;'><b>Wat moet ik nu met deze informatie?</b></p>";
    contents += "<p id='ending2' style='font-family: Arial, Helvetica, sans-serif;'>Het is de bedoeling dat u deze resultaten print en mee neemt naar uw arts. ";
    contents += "Uw arts kan op basis van deze gegevens behandelopties nogmaals uitleggen. ";
    contents += "Daarnaast geeft de tabel inzicht in wat u belangrijk vindt in een behandeling. Niet tevreden met uw resultaten?";
    contents += "U kunt de voorkeuren nog aanpassen en printen.</p>";
    myWindow.document.write(contents);
    myWindow.print();
}

function createResultsTables(){
    var resultsTableOutput = "";
    switch(profile.risk) {
        case 1 :
                    resultsTableOutput += "<table width='100%'><tr valign='top'><td width='50%'>";
                    resultsTableOutput += createTable("Operatie", subjectQuestionsSurgery, preferenceQuestionsSurgery, comparisonQuestionsSurgery);
                    resultsTableOutput += "</td><td>";
                    resultsTableOutput += createTable("Uitwendige Bestraling", subjectQuestionsRadiotherapy, preferenceQuestionsRadiotherapy, comparisonQuestionsRadiotherapy);
                    resultsTableOutput += "</td></tr><tr valign='top'><td width='50%'>";
                    resultsTableOutput += createTable("Inwendige Bestraling", subjectQuestionsBrachytherapy, preferenceQuestionsBrachytherapy, comparisonQuestionsBrachytherapy);
                    resultsTableOutput += "</td><td>";
                    resultsTableOutput += createTable("Actief Volgen", subjectQuestionsActiveSurveillance, preferenceQuestionsActiveSurveillance, comparisonQuestionsActiveSurveillance);
                    resultsTableOutput += "</td></tr></table>";
                    return resultsTableOutput;

        case 2 :
                    resultsTableOutput += "<table width='100%'><tr valign='top'><td width='50%'>";
                    resultsTableOutput += createTable("Operatie", subjectQuestionsSurgery, preferenceQuestionsSurgery, comparisonQuestionsSurgery);
                    resultsTableOutput += "</td><td>";
                    resultsTableOutput += createTable("Uitwendige Bestraling", subjectQuestionsRadiotherapy, preferenceQuestionsRadiotherapy, comparisonQuestionsRadiotherapy);
                    resultsTableOutput += "</td></tr><tr valign='top'><td width='50%'>";
                    resultsTableOutput += createTable("Inwendige Bestraling", subjectQuestionsBrachytherapy, preferenceQuestionsBrachytherapy, comparisonQuestionsBrachytherapy);
                    resultsTableOutput += "</td><td></td></tr></table>";
                    return resultsTableOutput;
                
        case 3 :
                    resultsTableOutput += "<table width='100%'><tr valign='top'><td width='50%'>";
                    resultsTableOutput += createTable("Operatie", subjectQuestionsSurgery, preferenceQuestionsSurgery, comparisonQuestionsSurgery);
                    resultsTableOutput += "</td><td>";
                    resultsTableOutput += createTable("Uitwendige Bestraling", subjectQuestionsRadiotherapy, preferenceQuestionsRadiotherapy, comparisonQuestionsRadiotherapy);
                    resultsTableOutput += "</td></tr></table>";
                    return resultsTableOutput;
                
        default :
                    resultsTableOutput += "Something went wrong with creating the result table.";
                    return resultsTableOutput;
    }
}

function createLegenda(){
    var legendaOutput = "";
    legendaOutput += "<table id='legenda' style='font-family: Arial, Helvetica, sans-serif;'>";
    legendaOutput += "<tr><td><b>Legenda:</b></td></tr>";
    legendaOutput += "<tr><td>Vergeleken als minst prettig:</td><td><img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'></td>";
    legendaOutput += "<td width='25'></td><td>Lage Impact: </td><td><img src='printimages/icon_dots_one.png' style='width:48px;height:16px;'></td></tr>";
    legendaOutput += "<tr><td></td><td></td>";
    legendaOutput += "<td width='25'></td><td>Gemiddelde Impact: </td><td><img src='printimages/icon_dots_two.png' style='width:48px;height:16px;'></td></tr>";
    legendaOutput += "<tr><td></td><td></td>";
    legendaOutput += "<td width='25'></td><td>Grote Impact: </td><td><img src='printimages/icon_dots_three.png' style='width:48px;height:16px;'></td></tr>";
    legendaOutput += "</table><BR><BR>";
    return legendaOutput;
}

function displayQuestionImage(input) {
    var imageQuestionOutput;
    switch(input){
        case 0 : 
            imageQuestionOutput = "<img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'>";
            return imageQuestionOutput;
        case 1 : 
            imageQuestionOutput = "<img src='printimages/icon_correct.png' style='width:16px;height:16px;'>";
            return imageQuestionOutput;
        case 2 : 
            imageQuestionOutput = "<img src='printimages/icon_questionmark.png' style='width:16px;height:16px;'>";
            return imageQuestionOutput;
        default :
            imageQuestionOutput = "";
            return imageQuestionOutput;    
    }
}

function displayComparison(input) {
    var imageQuestionOutput;
    switch(input){
        case 1 : 
            imageQuestionOutput = "<img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'>";
            return imageQuestionOutput;
        default :
            imageQuestionOutput = "";
            return imageQuestionOutput;    
    }
}

function displayPreferenceImage(input) {
    var imagePrefOutput;
    switch(input) {
        case 1 :
            imagePrefOutput = "<img src='printimages/icon_dots_one.png' style='width:48px;height:16px;'>";
            return imagePrefOutput;
        case 2 :
            imagePrefOutput = "<img src='printimages/icon_dots_two.png' style='width:48px;height:16px;'>";
            return imagePrefOutput;
        case 3 :
            imagePrefOutput = "<img src='printimages/icon_dots_three.png' style='width:48px;height:16px;'>";
            return imagePrefOutput;
        default :
            imagePrefOutput = "<img src='printimages/icon_dots_zero.png' style='width:48px;height:16px;'>";
            return imagePrefOutput;
    }
}

function riskToText(input){
    var riskOutput;
    switch(input){
        case 1 :
            riskOutput = "laag risicoprofiel";
            return riskOutput;
        case 2 :
            riskOutput = "gemiddeld risicoprofiel+";
            return riskOutput;
        case 3 :
            riskOutput = "hoog risicoprofiel";
            return riskOutput;

        default :
            riskOutput = "Niet geselecteerd tumor";
            return riskOutput;
    }
}

function hospitalToText(input){
    var hospitalOutput;
    switch(input){
        case 1 :
            hospitalOutput = "Maastricht UMC+";
            return hospitalOutput;
        case 2 :
            hospitalOutput = "Zuyderland Ziekenhuis";
            return hospitalOutput;
        default :
            hospitalOutput = "Niet geselecteerd ziekenhuis";
            return hospitalOutput;
    }
}

function createTable(topic, subjects, preference, comparison) {
    var tableOutput = "";
    tableOutput += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
        tableOutput += "<tr><td width='50%'><b>"+ topic + ":</b></td><td width='25%'></td><td width='25%'></td></tr>";
        for (i = 0; i < subjects.length; i++){
            tableOutput += "<tr><td width='80%' align='left'>"+ subjects[i];
            tableOutput += "</td><td width='15%' align='right'>" + displayPreferenceImage(preference[i]) ;
            tableOutput += "</td><td width='5%' align='left'>" + displayComparison(comparison[i]);
            tableOutput += "</td></tr>";
        }
    tableOutput += "</table><BR>";
    return tableOutput;
}

function createKnowledgeTestTable () {
    var counter = 1;
    var knowledgeTable = "";
    knowledgeTable += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
    knowledgeTable += "<tr><td><b>Resultaten Belangrijke Vragen</b></td></tr>";
    for (i = 0; i < knowledgeQuestions.length; i++){
            if (i === 6 && profile.risk === 3) {
                knowledgeTable += "";
            }
            else {
                knowledgeTable += "<tr><td>"+ counter + ". "+ knowledgeSubjects[i];
                knowledgeTable += "</td><td>" + displayQuestionImage(knowledgeQuestions[i]);
                knowledgeTable += "</td></tr>";
                counter += 1;
            }
            
        }
    knowledgeTable += "</table>";
    return knowledgeTable;
}

function profileToText(input) {
    var profileOutput;
    switch(input){
        case 1 :
            profileOutput = "actief volgen, inwendige bestraling, uitwendige bestraling & operatie.";
            return profileOutput;
        case 2 :
            profileOutput = "inwendige bestraling, uitwendige bestraling & operatie.";
            return profileOutput;
        case 3 :
            profileOutput = "uitwendige bestraling & operatie.";
            return profileOutput;
        default :
            profileOutput = "onbekend";
            return profileOutput;
    }
}

function displayQuestions () {
    var questionTable = "";
    if(printingCheckmarks.length > 0){    
            questionTable += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
            for (i = 0; i < printingCheckmarks.length; i++){
                if (printingCheckmarks[i] === 1) {
                    questionTable += "<tr><td><i>"+ printingQuestions[i];
                    questionTable += "</i></td></tr>";    
                }
                else {
                    questionTable += "";
                }
            }
        questionTable += "</table>";
    }
    
    if(profile.question !== undefined) {
        questionTable += profile.question;
    }
    
    return questionTable;
}

function findAnswers(treatment, prefix, answer, output, subjects){
    var temp = "";
    for (var i = 0; i < treatment.length; i++){
        switch(treatment[i]) {
            case answer :
                temp = " " + subjects[i] + " van " + prefix;
                output.push(temp);
                break;
            default :
                break;
        }
    }
}

function checkIfEmpty(arrayName, stringComment){
    if(arrayName.length > 0){   
            arrayName.join(', ');
    }else{
             arrayName[0] = stringComment;         
    }
}

function displayImpact(input){
    var impactAnsers = [];
    switch(profile.risk){
        case 1 :
            findAnswers(preferenceQuestionsSurgery,"operatie", input, impactAnsers, subjectQuestionsSurgery);
            findAnswers(preferenceQuestionsRadiotherapy,"uitwendige bestraling", input, impactAnsers, subjectQuestionsRadiotherapy);
            findAnswers(preferenceQuestionsBrachytherapy,"inwendige bestraling", input, impactAnsers, subjectQuestionsBrachytherapy);
            findAnswers(preferenceQuestionsActiveSurveillance,"actief volgen", input, impactAnsers, subjectQuestionsActiveSurveillance);
            checkIfEmpty(impactAnsers, "Geen voorkeuren met kleine impact beantwoord.");
            return impactAnsers;
        
        case 2 :
            findAnswers(preferenceQuestionsSurgery,"operatie", input, impactAnsers, subjectQuestionsSurgery);
            findAnswers(preferenceQuestionsRadiotherapy,"uitwendige bestraling", input, impactAnsers, subjectQuestionsRadiotherapy);
            findAnswers(preferenceQuestionsBrachytherapy,"inwendige bestraling", input, impactAnsers, subjectQuestionsBrachytherapy);
            checkIfEmpty(impactAnsers, "Geen voorkeuren met kleine impact beantwoord.");
            return impactAnsers;
        
        case 3 :
            findAnswers(preferenceQuestionsSurgery,"operatie", input, impactAnsers, subjectQuestionsSurgery);
            findAnswers(preferenceQuestionsRadiotherapy,"uitwendige bestraling", input, impactAnsers, subjectQuestionsRadiotherapy);
            checkIfEmpty(impactAnsers, "Geen voorkeuren met kleine impact beantwoord.");
            return impactAnsers;
        default :
            alert("Error in diplayLowImpact");
    }
}


}

