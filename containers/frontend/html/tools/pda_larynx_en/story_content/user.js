function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a61ET1DIBx":
        Script1();
        break;
      case "6qYcEdE8prF":
        Script2();
        break;
      case "62QZYc0Au4W":
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
// Samenvatting Vergelijken Printen Engels

var myWindow = window.open("","Print","width=600,height=800,scrollbars=1,resizable=1");

//// DECLARE ALL THE VARIABLES
var contents;
var subjects = ["Treatments","","Possible short-term complications","Possible long-term complications","Possible additional Treatments"];
var profile = {
	risk : ""
};
profile.risk = player.GetVar("Profile_Age");

var contentRadiotherapie = "<TR style='vertical-align:top; padding:5px;'><th>Radiotherapy</th>";
    contentRadiotherapie += "<td>Your neck will be irradiated for 6 to 7 weeks on weekdays. For 6 to 7 weeks, you will have to come to the hospital on all weekdays.</td>";
    contentRadiotherapie += "<td><ul><li>Skin Reactions.</li><li>Nausea.</li><li>Dry Mouth.</li><li>Swallowing difficulties</li><li>Changes in taste</li></ul></td>";
    contentRadiotherapie += "<td><ul><li>Reduced functioning of the thyroid gland.</li><li>Swallowing difficulties.</li><li>Dry mouth</li><li>Higher risk of cerebral infarction. </li></ul></td>";
	contentRadiotherapie += "<td>Of the patients who survive the first 5 years after treatment, 2 out of 10 will have had to undergo further surgery because of a cancer recurrence or problems with the larynx.</td></TR>";
var contentChemoradiatie = "<TR style='vertical-align:top; padding:5px;'><th>Chemoradiation</th>";
    contentChemoradiatie += "<tdYou will be given three chemotherapy treatments spread over seven weeks, and your neck will be irradiated at the same time. <ul><li>You will be hospitalised three times for several days to receive chemotherapy treatment.</li><li>You will have to come to the hospital on all weekdays for 7 weeks.</li><li>Intensive treatment with more side effects compared to radiotherapy alone.</li></ul></td>";
    contentChemoradiatie += "<td><ul><li>Similar side effects as radiation, but more severe.</li><li>Reduced kidney function.</li></ul></td>";
    contentChemoradiatie += "<td><ul><li>Hearing loss</li><li>Reduced functioning of the thyroid gland</li><li>Chance of kidney disorders.</li></ul></td>";
	contentChemoradiatie += "<td>Of the patients who survive the first 5 years after treatment, 2 out of 10 will have had to undergo further surgery because of a cancer recurrence or problems with the larynx.</td></TR>";
var contentOperatie = "<TR style='vertical-align:top; padding:5px;'><th>Surgery</th>";
    contentOperatie += "<td>Removal of the larynx (laryngectomy).<ul><li>You will be given a stoma in the neck.</li><liYou will be taught a new way to speak.</li><li>You will be told within two weeks whether the tumour was removed completely.</li><li>After the surgery, you will receive 7 weeks of radiotherapy.</li></ul></td>";
    contentOperatie += "<td><ul><li>Post-operative bleeding</li><li>Wound infection.</li><li>Thrombosis.</li><li>Development of fistulas.</li></ul></td>";
    contentOperatie += "<td><ul><li>Problems with voice prosthesis.</li><li>Swallowing difficulties</li><li>Altered breathing </li><li>Reduced sense of smell</li></ul></td>";
	contentOperatie += "<td>In the majority of cases, surgery is followed by 4 to 6 weeks of radiotherapy. You will then run the added risk of radiation side effects.</td></TR>";

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS

function writePage(){
    contents = "<html><head><title>Treatment Comparison Larynx</title></head><body>";
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
			alert("No Risk Profile Found ");
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
var subjectQuestions = ["Duration","Treatment","Long term Consequences","Short term Consequences", "Follow-Up"];

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
	contents +="<div><h3 id='title' style='font-family: Arial, Helvetica, sans-serif;'>Treatment option consultation form of: " + profile.name + "</h3></div>";
	contents +="<p id='subtitle' style='font-family: Arial, Helvetica, sans-serif;'>You are diagnosed with a " + tumorToText(profile.tumor) + " tumour and are being treated at " + hospitalToText(profile.hospital) + ".</p>";
	contents +="<p id='paragraph01' style='font-family: Arial, Helvetica, sans-serif;'>For you the following treatment options are available: " + ageToText(profile.age) + "</p>";
	contents +="<p id='paragraph02' style='font-family: Arial, Helvetica, sans-serif;'>You have received a lot of information about the treatments. Perhaps you want to know more about: <BR><i>" + displayWrongAnswers() + "</i></p>";
	contents +="<p id='paragraph03' style='font-family: Arial, Helvetica, sans-serif;'>You have written down these questions for the doctor: <BR><i>" + displayCustomQuestions() + "</i></p>";
	contents +="<p id='paragraph04' style='font-family: Arial, Helvetica, sans-serif;'>In your preferences you mentioned these topics are of great importance to you:<BR><i>" + displayHighImpact() + "</i></p>";
	contents +="<p id='paragraph05' style='font-family: Arial, Helvetica, sans-serif;'>Your results state that you think these topics are less important to you.:<BR><i>" + displayLowImpact() +"</i></p>";
	contents +="<BR><HR><BR>";
	contents += createLegenda();
	contents += createResultsTable();
	contents += "<BR><p id='ending' style='font-family: Arial, Helvetica, sans-serif;'><b>How do I use this information?</b></p>";
	contents += "<p id='ending2' style='font-family: Arial, Helvetica, sans-serif;'>These results are supposed to be printed and taken to your treating physician. ";
	contents += "Your doctor can explain parts of the treatment again to you and give extra information.";
	contents += "Next to that the doctor will get some insight in what is most important to you. Not happy with the results?";
	contents += "You can fill in the preferences again and re-print the results. </p>";
	myWindow.document.write(contents);
	myWindow.print();
}

function createResultsTable(){
	var resultsTableOutput = "";
	switch(profile.age) {
		case 1 :
						resultsTableOutput += "<table id='results' width='100%' style='font-family: Arial, Helvetica, sans-serif;'>";
						resultsTableOutput += "<tr><td width='25%'><b>Onderwerp:</b></td><td width='25%'><b>Radiotherapy:</b></td><td width='25%'><b>Chemoradiation:</b></td><td width='25%'><b>Surgery:</b></td></tr>";
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
					resultsTableOutput += "<tr><td><b>Onderwerp:</b></td><td><b>Radiotherapy:</b></td><td><b>Surgery:</b></td></tr>";
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
	legendaOutput += "<tr><td><b>Legend:</b></td></tr>";
	legendaOutput += "<tr><td>Correct</td><td><img src='printimages/icon_correct.png' style='width:16px;height:16px;'></td>";
	legendaOutput += "<td width='25'></td><td>Lage Impact: </td><td><img src='printimages/icon_dots_one.png' style='width:48px;height:16px;'></td></tr>";
	legendaOutput += "<tr><td>Incorrect</td><td><img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'></td>";
	legendaOutput += "<td width='25'></td><td>Medium Impact: </td><td><img src='printimages/icon_dots_two.png' style='width:48px;height:16px;'></td></tr>";
	legendaOutput += "<tr><td>Not filled in</td><td><img src='printimages/icon_questionmark.png' style='width:16px;height:16px;'></td>";
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
			tumorOutput = "No tumor selected";
			return tumorOutput;
	}
}

function hospitalToText(input){
	var hospitalOutput;
	switch(input){
		case 1 :
			hospitalOutput = "Maastricht UMC+ and the Maastro Clinic";
			return hospitalOutput;
		case 2 :
			hospitalOutput = "Antoni van Leeuwenhoek hospital";
			return hospitalOutput;
		case 3 :
			hospitalOutput = "UMC Utrecht";
			return hospitalOutput;
		case 4 :
			hospitalOutput = "UMC Groningen";
			return hospitalOutput;
		default :
			hospitalOutput = "an unknown hospital";
			return hospitalOutput;
	}
}

function ageToText(input){
	var ageOutput;
	switch(input){
		case 1 :
			ageOutput = "Radiotherapy, Chemoradiation & Surgery.";
			return ageOutput;
		case 2 :
			ageOutput = "Radiotherapy & Surgery.";
			return ageOutput;
		default :
			ageOutput = "No age selected";
			return ageOutput;
	}
}

function findAnswers(treatment, prefix, answer, output){
	var temp = "";
	for (var i = 0; i < subjectQuestions.length; i++){
		switch(treatment[i]) {
			case answer :
				temp = subjectQuestions[i] + " of " + prefix;
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
			findAnswers(knowledgeQuestionsRadiotherapy,"Radiotherapy", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsChemotherapy,"Chemoradiation", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsSurgery,"Surgery", 0, wrongAnswers);
			checkIfEmpty(wrongAnswers, "You answerred every question correct.");
			return wrongAnswers;
		case 2 : 
			findAnswers(knowledgeQuestionsRadiotherapy,"Radiotherapy", 0, wrongAnswers);
			findAnswers(knowledgeQuestionsSurgery,"Surgery", 0, wrongAnswers);
			checkIfEmpty(wrongAnswers, "You answerred every question correct.");
			return wrongAnswers;
		default :
			alert("Error in displayWrongAnswers");
	}
}

function displayHighImpact(){
	highImpactAnswers = [];
	switch(profile.age){
		case 1 :
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsChemotherapy,"Chemoradiation", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Surgery", 3, highImpactAnswers);
			
			checkIfEmpty(highImpactAnswers, "No preferences were answerred with a big impact.");
			return highImpactAnswers;
		case 2 : 
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 3, highImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Surgery", 3, highImpactAnswers);
			checkIfEmpty(highImpactAnswers, "No preferences were answerred with a big impact.");
			return highImpactAnswers;
		default :
			alert("Error in displayHighImpact");
	}
}

function displayLowImpact(){
	lowImpactAnswers = [];
	switch(profile.age){
		case 1 :
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsChemotherapy,"Chemoradiation", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Surgery", 1, lowImpactAnswers);
			checkIfEmpty(lowImpactAnswers, "No preferences were answerred with a small impact.");
			return lowImpactAnswers;
		case 2 : 
			findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 1, lowImpactAnswers);
			findAnswers(preferenceQuestionsSurgery,"Surgery", 1, lowImpactAnswers);
			checkIfEmpty(lowImpactAnswers, "No preferences were answerred with a small impact.");
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
		profile.questions = "You did not write down any questions for your doctor..";
		return profile.questions;
	}
	else{
		return profile.questions;
	}
}
}

