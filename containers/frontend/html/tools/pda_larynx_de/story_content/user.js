function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6l2Xq8vWJ5f":
        Script1();
        break;
      case "63PgMwhXFu6":
        Script2();
        break;
      case "5Xst4yQHu3H":
        Script3();
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
    alert("Geben Sie ein gültiges Jahr ein!");
    player.SetVar("Profile_Leeftijd", 0 );
    return false; 
}
if(dobMonth < 1 || dobMonth > 12 || isNaN(dobMonth) || isNotInt(dobMonth)){ 
    alert("Geben Sie ein gültiges Jahr ein!");
    player.SetVar("Profile_Leeftijd", 0 );
    return false; 
}
if(dobYear < 1900 || dobYear > todayYear || isNaN(dobYear) || isNotInt(dobYear)){ 
    alert("Geben Sie ein gültiges Jahr ein!");
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

if (ageYear > 70) {
	player.SetVar("Profile_Age",2);
} else {
	player.SetVar("Profile_Age",1);
}

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
  // Larynx T3/T4
// Samenvatting Vergelijken Printen

var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Behandelingen","","Mogelijke Complicaties","Mogelijke Gevolgen","Mogelijk aanvullende behandeling"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_Age");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px;'><th>Bestraling</th>";
    contentRadiotherapie += "<td>Uw hals wordt gedurende 6-7 weken op werkdagen bestraald. U zult 6-7 weken elke doordeweekse dag naar het ziekenhuis moeten komen. </td>";
    contentRadiotherapie += "<td><ul><li>Huidirritatie.</li><li>Misselijkheid.</li><li>Kans op darmklachten.</li><li>Droge mond.</li><li>Slikproblemen</li><li>Smaakverandering</li></ul></td>";
    contentRadiotherapie += "<td><ul><li>Verminderde werking schildklier.</li><li>Problemen met slikken.</li><li>Droge mond</li><li>Hoger risico op herseninfarct. </li></ul></td>";
	contentRadiotherapie += "<td>Als u na 5 jaar nog in leven bent blijkt dat gemiddeld 2 op de 10 mensen alsnog een operatie hebben moeten ondergaan in verband met terugkeer van de kanker of problemen met het strottenhoofd.</td></TR>";
var contentChemoradiatie = "<TR style='vertical-align:top; padding:5px;'><th>Chemoradiatie</th>";
    contentChemoradiatie += "<td>U krijgt verspreid over zeven weken drie kuren chemotherapie en tegelijkertijd wordt uw hals bestraald. <ul><li>U wordt 3 maal gedurende enkele dagen opgenomen voor chemotherapie</li><li>U zult 7 weken elke doordeweekse dag naar het ziekenhuis moeten komen.</li><li>Intensieve behandeling met meer bijwerkingen dan alleen bestraling.</li></ul></td>";
    contentChemoradiatie += "<td><ul><li>Dezelfde bijwerkingen als bestraling, maar dan heftiger.</li><li>Verslechterde nierfunctie.</li></ul></td>";
    contentChemoradiatie += "<td><ul><li>Gehoorschade</li><li>Verminderde werking schildklier</li><li>Kans op nierfunctiestoornissen</li></ul></td>";
	contentChemoradiatie += "<td>Als u na 5 jaar nog in leven bent blijkt dat gemiddeld 2 op de 10 mensen alsnog een operatie hebben moeten ondergaan in verband met terugkeer van de kanker of problemen met het strottenhoofd.</td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Operatie</th>";
    contentOperatie += "<td>Verwijdering van strottenhoofd (laryngectomie).<ul><li>U krijgt een stoma in de hals.</li><li>U zult op een nieuwe manier leren praten.</li><li>U hoort binnen twee weken of de tumor geheel verwijderd is.</li><li>U zult na de operatie 7 weken  bestraling krijgen</li></ul></td>";
    contentOperatie += "<td><ul><li>Nabloeding</li><li>Wondinfectie.</li><li>Trombose.</li><li>Fistelvorming.</li></ul></td>";
    contentOperatie += "<td><ul><li>Problemen met stemprothese.</li><li>Problemen met slikken</li><li>Veranderende ademhaling</li><li>Verminderde reukfunctie</li></ul></td>";
	contentOperatie += "<td>In de meerderheid van de gevallen zult  u 4-6 weken na de operatie ook bestralingen krijgen. Dan loopt u ook het risico op de bijwerkingen van bestraling.</td></TR>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Vergelijken Prostaat</title></head><body>";
    contents += "<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'>";
    contents += "<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents += "<table style='text-align:left; font-family: Asap, sans-serif'>";
    contents += "<tr style='vertical-align:top; background-color: #1AAFD9; color: white;'>";
    contents += "<th>"+subjects[0]+"</th><th>"+subjects[1]+"</th><th>"+subjects[2]+"</th><th>"+subjects[3]+"</th><th>"+subjects[4]+"</th>";
    contents += riskToTable(profile.risk);
    contents += "</table></body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function riskToTable(input){
	var tableOutput;
	switch(input){
		case 1 :
			tableOutput = contentRadiotherapie + contentChemoradiatie + contentOperatie;
			return tableOutput;
		case 2 :
			tableOutput = contentRadiotherapie + contentOperatie;
			return tableOutput;
		default :
			alert("Geen Risicoprofiel Gevonden");
			return;
	}
}
}

function Script3()
{
  var myWindow = window.open("","Print","width=500,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var wrongAnswers = [];
var highImpactAnswers = [];
var lowImpactAnswers = [];
var subjectQuestions = ["Duur","Behandeling","Gevolgen Lang Termijn","Gevolgen Korte Termijn", "Follow-Up"];

var profile = {
	name : "",
	age : "",
	tumor : "",
	hospital : "",
	questions : ""
};
profile.name = player.GetVar("Profile_Name");
profile.age = player.GetVar("Profile_Age");
profile.tumor = player.GetVar("Profile_Tumor");
profile.hospital  = player.GetVar("Profile_Hospital");
profile.questions = player.GetVar("Profile_CustomQuestion");

var knowledgeQuestionsRadiotherapy = [];
var knowledgeQuestionsChemotherapy = [];
var knowledgeQuestionsSurgery = [];
knowledgeQuestionsRadiotherapy[0] = player.GetVar("Knowledge_Question01");
knowledgeQuestionsChemotherapy[0] = player.GetVar("Knowledge_Question02");
knowledgeQuestionsSurgery[0] = player.GetVar("Knowledge_Question03");
knowledgeQuestionsRadiotherapy[1] = player.GetVar("Knowledge_Question04");
knowledgeQuestionsChemotherapy[1] = player.GetVar("Knowledge_Question05");
knowledgeQuestionsSurgery[1] = player.GetVar("Knowledge_Question06");
knowledgeQuestionsRadiotherapy[2] = player.GetVar("Knowledge_Question07");
knowledgeQuestionsChemotherapy[2] = player.GetVar("Knowledge_Question08");
knowledgeQuestionsSurgery[2] = player.GetVar("Knowledge_Question09");
knowledgeQuestionsRadiotherapy[3] = player.GetVar("Knowledge_Question10");
knowledgeQuestionsChemotherapy[3] = player.GetVar("Knowledge_Question11");
knowledgeQuestionsSurgery[3] = player.GetVar("Knowledge_Question12");
knowledgeQuestionsRadiotherapy[4] = player.GetVar("Knowledge_Question13");
knowledgeQuestionsChemotherapy[4] = player.GetVar("Knowledge_Question14");
knowledgeQuestionsSurgery[4] = player.GetVar("Knowledge_Question15");

var preferenceQuestionsRadiotherapy = [];
var preferenceQuestionsChemotherapy = [];
var preferenceQuestionsSurgery = [];
preferenceQuestionsRadiotherapy[0] = player.GetVar("Preferences_Question01");
preferenceQuestionsChemotherapy[0] = player.GetVar("Preferences_Question02");
preferenceQuestionsSurgery[0] = player.GetVar("Preferences_Question03");
preferenceQuestionsRadiotherapy[1] = player.GetVar("Preferences_Question04");
preferenceQuestionsChemotherapy[1] = player.GetVar("Preferences_Question05");
preferenceQuestionsSurgery[1] = player.GetVar("Preferences_Question06");
preferenceQuestionsRadiotherapy[2] = player.GetVar("Preferences_Question07");
preferenceQuestionsChemotherapy[2] = player.GetVar("Preferences_Question08");
preferenceQuestionsSurgery[2] = player.GetVar("Preferences_Question09");
preferenceQuestionsRadiotherapy[3] = player.GetVar("Preferences_Question10");
preferenceQuestionsChemotherapy[3] = player.GetVar("Preferences_Question11");
preferenceQuestionsSurgery[3] = player.GetVar("Preferences_Question12");
preferenceQuestionsRadiotherapy[4] = player.GetVar("Preferences_Question13");
preferenceQuestionsChemotherapy[4] = player.GetVar("Preferences_Question14");
preferenceQuestionsSurgery[4] = player.GetVar("Preferences_Question15");

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
	contents = "<html><head></head><body>";
	contents +="<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'> ";
	contents +="<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
	contents +="<div><h3 id='title' style='font-family: Arial, Helvetica, sans-serif;'>Behandeloptie Gesprek Formulier: " + profile.name + "</h3></div>";
	contents +="<p id='subtitle' style='font-family: Arial, Helvetica, sans-serif;'>U heeft een " + tumorToText(profile.tumor) + " tumor en wordt hiervoor in het " + hospitalToText(profile.hospital) + " behandeld.</p>";
	contents +="<p id='paragraph01' style='font-family: Arial, Helvetica, sans-serif;'>Voor u zijn de volgende behandelopties beschikbaar: " + ageToText(profile.age) + "</p>";
	contents +="<p id='paragraph02' style='font-family: Arial, Helvetica, sans-serif;'>Bij iedere behandeloptie heeft u over enkele onderwerpen gelezen. Waarschijnlijk wil u meer weten over: <BR><i>" + displayWrongAnswers() + "</i></p>";
	contents +="<p id='paragraph03' style='font-family: Arial, Helvetica, sans-serif;'>U heeft de volgende vragen nog opgeschreven voor de dokter: <BR><i>" + displayCustomQuestions() + "</i></p>";
	contents +="<p id='paragraph04' style='font-family: Arial, Helvetica, sans-serif;'>In uw voorkeuren heeft u aangegeven dat deze onderwerpen zeer belangrijk voor u zijn:<BR><i>" + displayHighImpact() + "</i></p>";
	contents +="<p id='paragraph05' style='font-family: Arial, Helvetica, sans-serif;'>Uw resultaten stellen dat u deze aspecten minder belangrijk vindt:<BR><i>" + displayLowImpact() +"</i></p>";
	contents +="<BR><HR><BR>";
	contents += createLegenda();
	contents += createResultsTable();
	contents += "<BR><p id='ending' style='font-family: Arial, Helvetica, sans-serif;'><b>Wat moet ik nu met deze informatie?</b></p>";
	contents += "<p id='ending2' style='font-family: Arial, Helvetica, sans-serif;'>Het is de bedoeling dat u deze resultaten print en mee neemt naar uw arts. ";
	contents += "Uw arts kan op basis van deze gegevens behandelopties nogmaals uitleggen.";
	contents += "Daarnaast geeft de tabel inzicht in wat u belangrijk vindt in een behandeling. Niet tevreden?";
	contents += "U kunt de voorkeuren nog aanpassen en (opnieuw) printen door de vragen opnieuw in te vullen.</p>";
	myWindow.document.write(contents);
	myWindow.print();
}

function createResultsTable(){
	var resultsTableOutput = "";
	switch(profile.age) {
		case 1 :
						resultsTableOutput += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
						resultsTableOutput += "<tr><td width='25%'><b>Onderwerp:</b></td><td width='25%'><b>Radiotherapie:</b></td><td width='25%'><b>Chemoradiatie:</b></td><td width='25%'><b>Operatie:</b></td></tr>";
						for (var i = 0; i < subjectQuestions.length; i++){
							resultsTableOutput += "<tr><td>"+ subjectQuestions[i];
							resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsRadiotherapy[i])  + displayPreferenceImage(preferenceQuestionsRadiotherapy[i]);
							resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsChemotherapy[i])  + displayPreferenceImage(preferenceQuestionsChemotherapy[i]);
							resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsSurgery[i]) + displayPreferenceImage(preferenceQuestionsSurgery[i]);
							resultsTableOutput += "</td></tr>";
						}
						resultsTableOutput += "</table><BR>";
					return resultsTableOutput;
		case 2 :
					resultsTableOutput += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
					resultsTableOutput += "<tr><td><b>Onderwerp:</b></td><td><b>Radiotherapie:</b></td><td><b>Operatie:</b></td></tr>";
						for (var i = 0; i < subjectQuestions.length; i++){
							resultsTableOutput += "<tr><td>"+ subjectQuestions[i];
							resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsRadiotherapy[i])  + displayPreferenceImage(preferenceQuestionsRadiotherapy[i]);
							resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsSurgery[i]) + displayPreferenceImage(preferenceQuestionsSurgery[i]);
							resultsTableOutput += "</td></tr>";
						}
					resultsTableOutput += "</table><BR>";
					return resultsTableOutput;
		default :
					resultsTableOutput += "Something went wrong";
					return resultsTableOutput;
	}
}

function createLegenda(){
	var legendaOutput = "";
	legendaOutput += "<table id='legenda' style='font-family: Arial, Helvetica, sans-serif;'>";
	legendaOutput += "<tr><td><b>Legenda:</b></td></tr>";
	legendaOutput += "<tr><td>Correct</td><td><img src='printimages/icon_correct.png' style='width:16px;height:16px;'></td>";
	legendaOutput += "<td width='25'></td><td>Lage Impact: </td><td><img src='printimages/icon_dots_one.png' style='width:48px;height:16px;'></td></tr>";
	legendaOutput += "<tr><td>Incorrect</td><td><img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'></td>";
	legendaOutput += "<td width='25'></td><td>Medium Impact: </td><td><img src='printimages/icon_dots_two.png' style='width:48px;height:16px;'></td></tr>";
	legendaOutput += "<tr><td>Niet ingevuld</td><td><img src='printimages/icon_questionmark.png' style='width:16px;height:16px;'></td>";
	legendaOutput += "<td width='25'></td><td>High Impact: </td><td><img src='printimages/icon_dots_three.png' style='width:48px;height:16px;'></td></tr>";
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
		default :
			imageQuestionOutput = "<img src='printimages/icon_questionmark.png' style='width:16px;height:16px;'>";
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

function tumorToText(input){
	var tumorOutput;
	switch(input){
		case 1 :
			tumorOutput = "T3N0";
			return tumorOutput;
		case 2 :
			tumorOutput = "T3N+";
			return tumorOutput;
		case 3 :
			tumorOutput = "T4N0";
			return tumorOutput;
		case 4 :
			tumorOutput = "T4N+";
			return tumorOutput;
		default :
			tumorOutput = "Niet geselecteerd tumor";
			return tumorOutput;
	}
}

function hospitalToText(input){
	var hospitalOutput;
	switch(input){
		case 1 :
			hospitalOutput = "Maastricht UMC+ en de Maastro Clinic";
			return hospitalOutput;
		case 2 :
			hospitalOutput = "Antoni van Leeuwenhoek ziekenhuis";
			return hospitalOutput;
		case 3 :
			hospitalOutput = "UMC Utrecht";
			return hospitalOutput;
		case 4 :
			hospitalOutput = "UMC Groningen";
			return hospitalOutput;
		default :
			hospitalOutput = "een onbekend ziekenhuis";
			return hospitalOutput;
	}
}

function ageToText(input){
	var ageOutput;
	switch(input){
		case 1 :
			ageOutput = "Radiotherapie, Chemoradiatie & Operatie.";
			return ageOutput;
		case 2 :
			ageOutput = "Radiotherapie & Operatie.";
			return ageOutput;
		default :
			ageOutput = "Niet geselecteerde leeftijd";
			return ageOutput;
	}
}

function findAnswers(treatment, prefix, answer, output){
	var temp = "";
	for (var i = 0; i < subjectQuestions.length; i++){
		switch(treatment[i]) {
			case answer :
				temp = subjectQuestions[i] + " van " + prefix;
				output.push(temp);
				break;
			default :
				break;
		}
	}
}

function displayWrongAnswers(){
	wrongAnswers = [];
	switch(profile.age){
		case 1 :
			findAnswers(knowledgeQuestionsRadiotherapy,"Radiotherapie", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsChemotherapy,"Chemoradiatie", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsSurgery,"Operatie", 0, wrongAnswers);
			checkIfEmpty(wrongAnswers, "U heeft geen vragen fout beantwoord.");
			return wrongAnswers;
		case 2 : 
			findAnswers(knowledgeQuestionsRadiotherapy,"Radiotherapie", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsSurgery,"Operatie", 0, wrongAnswers);
			checkIfEmpty(wrongAnswers, "U heeft geen vragen fout beantwoord.");
			return wrongAnswers;
		default :
			alert("Error in displayWrongAnswers");
	}
}

function displayHighImpact(){
	highImpactAnswers = [];
	switch(profile.age){
		case 1 :
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapie", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsChemotherapy,"Chemoradiatie", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Operatie", 3, highImpactAnswers);
			
			checkIfEmpty(highImpactAnswers, "Geen voorkeuren met grote impact beantwoord.");
			return highImpactAnswers;
		case 2 : 
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapie", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Operatie", 3, highImpactAnswers);
			checkIfEmpty(highImpactAnswers, "Geen voorkeuren met grote impact beantwoord.");
			return highImpactAnswers;
		default :
			alert("Error in displayHighImpact");
	}
}

function displayLowImpact(){
	lowImpactAnswers = [];
	switch(profile.age){
		case 1 :
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapie", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsChemotherapy,"Chemoradiatie", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Operatie", 1, lowImpactAnswers);
			checkIfEmpty(lowImpactAnswers, "Geen voorkeuren met kleine impact beantwoord.");
			return lowImpactAnswers;
		case 2 : 
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapie", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Operatie", 1, lowImpactAnswers);
			checkIfEmpty(lowImpactAnswers, "Geen voorkeuren met kleine impact beantwoord.");
			return lowImpactAnswers;
		default :
			alert("Error in diplayLowImpact");
	}
}

function checkIfEmpty(arrayName, stringComment){
	if(arrayName.length > 0){   
			arrayName.join(', ');
	}else{
		     arrayName[0] = stringComment;		 
	}
}

function displayCustomQuestions(){
	if(profile.questions === undefined) {
		profile.questions = "U heeft geen vragen opgeschreven voor de arts.";
		return profile.questions;
	}
	else{
		return profile.questions;
	}
}
}

