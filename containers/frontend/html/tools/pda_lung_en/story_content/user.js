function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aH4zWaKjTs":
        Script1();
        break;
  }
}

function Script1()
{
  var myWindow = window.open("_", "_blank", "Print","width = 600,height = 800,scrollbars = 1,resizable = 1");
var player = GetPlayer();

//// DECLARE ALL THE VARIABLES
var contents;
var wrongAnswers = [];
var highImpactAnswers = [];
var lowImpactAnswers = [];
var subjectQuestions = ["Treatment Duration","Invasiveness","Treatment","Side-Effects", "Follow-Up"];

var knowledgeQuestionsRadiotherapy = [];
var knowledgeQuestionsSurgery = [];
knowledgeQuestionsRadiotherapy[0] = player.GetVar("Knowledge_Question02");
knowledgeQuestionsSurgery[0] = player.GetVar("Knowledge_Question01");
knowledgeQuestionsRadiotherapy[1] = player.GetVar("Knowledge_Question04");
knowledgeQuestionsSurgery[1] = player.GetVar("Knowledge_Question03");
knowledgeQuestionsRadiotherapy[2] = player.GetVar("Knowledge_Question06");
knowledgeQuestionsSurgery[2] = player.GetVar("Knowledge_Question05");
knowledgeQuestionsRadiotherapy[3] = player.GetVar("Knowledge_Question08");
knowledgeQuestionsSurgery[3] = player.GetVar("Knowledge_Question07");
knowledgeQuestionsRadiotherapy[4] = player.GetVar("Knowledge_Question10");
knowledgeQuestionsSurgery[4] = player.GetVar("Knowledge_Question09");

var preferenceQuestionsRadiotherapy = [];
var preferenceQuestionsSurgery = [];
preferenceQuestionsRadiotherapy[0] = player.GetVar("Preferences_Question02");
preferenceQuestionsSurgery[0] = player.GetVar("Preferences_Question01");
preferenceQuestionsRadiotherapy[1] = player.GetVar("Preferences_Question04");
preferenceQuestionsSurgery[1] = player.GetVar("Preferences_Question03");
preferenceQuestionsRadiotherapy[2] = player.GetVar("Preferences_Question06");
preferenceQuestionsSurgery[2] = player.GetVar("Preferences_Question05");
preferenceQuestionsRadiotherapy[3] = player.GetVar("Preferences_Question08");
preferenceQuestionsSurgery[3] = player.GetVar("Preferences_Question07");
preferenceQuestionsRadiotherapy[4] = player.GetVar("Preferences_Question10");
preferenceQuestionsSurgery[4] = player.GetVar("Preferences_Question09");

///// EXECUTE ALL THE FUNCTIONS

writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
    contents = "<html><head></head><body>";
    contents +="<link href='https://fonts.googleapis.com/css?family=Asap' rel='stylesheet'> ";
    contents +="<link rel='stylesheet' media='screen' type='text/css' href='printimages/screenstyle.css'>";
    contents +="<link rel='stylesheet' media='print' type='text/css' href='printimages/printingstyle.css'>";
    contents +="<div><h3 id='title' style='font-family: Asap, sans-serif;'><i><b>Treatment Option Form</b></i></h3></div>";
    contents +="<p id='subtitle' style='font-family: Asap, sans-serif;'>You have been diagnosed with stage III / N2 lung cancer</p>";
    contents +="<p id='paragraph01' style='font-family: Asap, sans-serif;'>There are two treatment options available for you. Radiotherapy in combination with chemotherapy or surgery in combination with radiotherapy.</p>";
    contents +="<p id='paragraph02' style='font-family: Asap, sans-serif;'>You have read about different topics and you probably want to know more about: <BR><i>" + displayWrongAnswers() + "</i></p>";
    contents +="<p id='paragraph04' style='font-family: Asap, sans-serif;'>In your preferences you concluded these topics are very important to you:<BR><i>" + displayHighImpact() + "</i></p>";
    contents +="<p id='paragraph05' style='font-family: Asap, sans-serif;'>Your results argue that these aspects are of less importance to you:<BR><i>" + displayLowImpact() +"</i></p>";
    contents +="<BR><HR><BR>";
    contents += createLegenda();
    contents += createResultsTable();
    contents += "<BR><p id='ending' style='font-family: Asap, sans-serif;'><b>What should I do with this information?</b></p>";
    contents += "<p id='ending2' style='font-family: Asap, sans-serif;'>You are supposed to take this form to your the doctors appointment.";
    contents += "This way the doctor can explain certain parts of the treatment again and get an indication what matters to you most in the treatment process.";
    contents += "The results of this tool are not set in stone. Together with your doctor you can decide which treatment is best for you.";
    contents += "If you want to adapt your results now, you can change them by taking the knowledge test again, or adjusting your preferences and print again.</p>";
    myWindow.document.write(contents);
    myWindow.print();
}

function createResultsTable(){
    var resultsTableOutput = "";
            resultsTableOutput += "<table id='results' width='100%' style='font-family: Asap, sans-serif;'>";
            resultsTableOutput += "<tr><td width='25%'><b>Topic:</b></td><td width='25%'><b>Radiotherapy:</b></td><td width='25%'><b>Surgery:</b></td></tr>";
            for (var i = 0; i < subjectQuestions.length; i++){
                    resultsTableOutput += "<tr><td>"+ subjectQuestions[i];
                    resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsRadiotherapy[i])  + displayPreferenceImage(preferenceQuestionsRadiotherapy[i]);
                    resultsTableOutput += "</td><td>" + displayQuestionImage(knowledgeQuestionsSurgery[i]) + displayPreferenceImage(preferenceQuestionsSurgery[i]);
                    resultsTableOutput += "</td></tr>";
                }
            resultsTableOutput += "</table><BR>";
            return resultsTableOutput;
}

function createLegenda(){
    var legendaOutput = "";
    legendaOutput += "<table id='legenda' style='font-family: Asap, sans-serif;'>";
    legendaOutput += "<tr><td><b>Legenda:</b></td></tr>";
    legendaOutput += "<tr><td>Correct</td><td><img src='printimages/icon_correct.png' style='width:16px;height:16px;'></td>";
    legendaOutput += "<td width='25'></td><td>No Problem: </td><td><img src='printimages/icon_dots_one.png' style='width:48px;height:16px;'></td></tr>";
    legendaOutput += "<tr><td>Incorrect</td><td><img src='printimages/icon_incorrect.png' style='width:16px;height:16px;'></td>";
    legendaOutput += "<td width='25'></td><td>Minor Problem: </td><td><img src='printimages/icon_dots_two.png' style='width:48px;height:16px;'></td></tr>";
    legendaOutput += "<tr><td>Not answerred</td><td><img src='printimages/icon_questionmark.png' style='width:16px;height:16px;'></td>";
    legendaOutput += "<td width='25'></td><td>Big Problem: </td><td><img src='printimages/icon_dots_three.png' style='width:48px;height:16px;'></td></tr>";
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

function findAnswers(treatment, suffix, answer, output){
    var temp = "";
    for (var i = 0; i < subjectQuestions.length; i++){
        switch(treatment[i]) {
            case answer :
                temp = subjectQuestions[i] + " of " + suffix;
                output.push(temp);
                break;
            default :
                break;
        }
    }
}

function displayWrongAnswers(){
    wrongAnswers = [];
        findAnswers(knowledgeQuestionsRadiotherapy,"Radiotherapy", 0, wrongAnswers);
        findAnswers(knowledgeQuestionsSurgery,"Surgery", 0, wrongAnswers);
        return wrongAnswers.join(', ');
}

function displayHighImpact(){
    highImpactAnswers = [];
        findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 3, highImpactAnswers);
        findAnswers(preferenceQuestionsSurgery,"Surgery", 3, highImpactAnswers);
        return highImpactAnswers.join(', ');
}

function displayLowImpact(){
    lowImpactAnswers = [];
        findAnswers(preferenceQuestionsRadiotherapy,"Radiotherapy", 1, lowImpactAnswers);
        findAnswers(preferenceQuestionsSurgery,"Surgery", 1, lowImpactAnswers);
        return lowImpactAnswers.join(', ');
}

}

