var quizDone = false;
var tabsOpened = [];

function scroll(el){
    var elOffset = el.offset().top;
    var elHeight = el.height();
    var windowHeight = $(window).height();
    var offset;
  
    if (elHeight < windowHeight) {
      offset = elOffset - ((windowHeight / 2) - (elHeight / 2));
    }
    else {
      offset = elOffset;
    }
  
    $.smoothScroll({ speed: 700 }, offset);
    return false;
}

function addClickedTab(element, e){
        var target = $( e.target );
        scroll(target);
        if(!tabsOpened.includes(element.id)){
            tabsOpened.push(element.id);
        }   

}

// Belangrijke Punten Methode 


function startBelangrijkePunten(){
    checkIfWatched();
    $('#bp_vraag1').fadeIn("slow");
    $('#belangrijkePuntenBTN').hide();
}

$(function(){
        $("input[name='bp_vraag1']").click(function () { scroll($('#bp_vraag1')); $('#bp_vraag2').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag2']").click(function () { scroll($('#bp_vraag2')); $('#bp_vraag3').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag3']").click(function () { scroll($('#bp_vraag3')); $('#bp_vraag4').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag4']").click(function () { scroll($('#bp_vraag4')); $('#bp_vraag5').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag5']").click(function () { scroll($('#bp_vraag5')); $('#bp_vraag6').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag6']").click(function () { scroll($('#bp_vraag6')); $('#bp_vraag7').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag7']").click(function () { scroll($('#bp_vraag7')); $('#bp_vraag8').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag8']").click(function () { scroll($('#bp_vraag8')); $('#bp_vraag9').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone();  });
        $("input[name='bp_vraag9']").click(function () { scroll($('#bp_vraag9')); $('#bp_vraag10').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone(); });
        $("input[name='bp_vraag10']").click(function () { scroll($('#bp_vraag10')); $('#bp_vraag11').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone(); });
        $("input[name='bp_vraag11']").click(function () { scroll($('#bp_vraag11')); $('#bp_vraag12').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone(); });
        $("input[name='bp_vraag12']").click(function () { scroll($('#bp_vraag12')); $('#bp_vraag13').fadeIn("slow"); belangrijkePuntenResultsIfQuizDone(); });
        $("input[name='bp_vraag13']").click(function () { quizDone = true; belangrijkePuntenResultsIfQuizDone(); scrollToResult(); });
});

function belangrijkePuntenResultsIfQuizDone() {
    if(quizDone){
        belangrijkePuntenResults();
    }
}

function belangrijkePuntenResults() {
	var bp_vragen = [];
    bp_vragen[0] = $('input[name="bp_vraag1"]:checked').val();
    bp_vragen[1] = $('input[name="bp_vraag2"]:checked').val();
    bp_vragen[2] = $('input[name="bp_vraag3"]:checked').val();
    bp_vragen[3] = $('input[name="bp_vraag4"]:checked').val();
    bp_vragen[4] = $('input[name="bp_vraag5"]:checked').val();
    bp_vragen[5] = $('input[name="bp_vraag6"]:checked').val();
    bp_vragen[6] = $('input[name="bp_vraag7"]:checked').val();
    bp_vragen[7] = $('input[name="bp_vraag8"]:checked').val();
    bp_vragen[8] = $('input[name="bp_vraag9"]:checked').val();
    bp_vragen[9] = $('input[name="bp_vraag10"]:checked').val();
    bp_vragen[10] = $('input[name="bp_vraag11"]:checked').val();
    bp_vragen[11] = $('input[name="bp_vraag12"]:checked').val();
    bp_vragen[12] = $('input[name="bp_vraag13"]:checked').val();

    var totaalGoedeVragen = validateQuestions(bp_vragen);  
    var outputText = getResultText(totaalGoedeVragen);
    document.getElementById("belangrijkePuntenOutput").innerHTML = outputText;
    $('.bp_feedback').show();
}

function scrollToResult() {
    Element.prototype.documentOffsetTop = function () {
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
    };
    
    var top = document.getElementById( 'belangrijkePuntenOutput' ).documentOffsetTop() - ( window.innerHeight / 2 );
    window.scrollTo( 0, top );
}


    function getResultText(totaalGoedeVragen){

        var outputText = "<h3> Resultaten</h3>U heeft " + totaalGoedeVragen + " vragen juist beantwoord. De onjuiste vragen zijn rood gekleurd. ";
        
        switch (totaalGoedeVragen) {
            default:
                outputText = "Er is iets fout gegaan in de berekening. Excuses. " + totaalGoedeVragen;
                break;
            case 0:
                outputText += "Misschien kunt u de informatie over de behandelingen nog eens goed doorlezen. Vraag anders extra informatie aan uw arts.";
                break;
            case 1:
                outputText = "U heeft 1 vraag juist beantwoord. Misschien kunt u de informatie over de behandelingen nog eens goed doorlezen. Vraag anders extra informatie aan uw arts.";
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                outputText += "Misschien kunt u de informatie over de behandelingen nog eens goed doorlezen. Vraag anders extra informatie aan uw arts.";
                break;
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                outputText += "Goed gedaan!";
                break;
            case 13:
                outputText = "<h3> Resultaten</h3>U heeft alle vragen juist beantwoord. Goed gedaan!" 
            break;
            }

        return outputText;
    }

// Vergelijken Gedeelte

function checkIfWatched(){
    if(tabsOpened.length !== 24){
        $('#warningTreatmentsNotWatched').modal('show');
    }
}

function startVergelijken(){
    checkIfWatched();
    $('#v_vraag1').fadeIn("slow");
    $('#vergelijkenBTN').hide();
}

function validateQuestions(bp_vragen){
    var correctQuestions = 0;
    for (i = 0; i < bp_vragen.length; i++) {
       var answerCorrect = parseInt(bp_vragen[i]);
       correctQuestions += answerCorrect;
       if (answerCorrect===0){
            $("#bp_vraag" + (i + 1)).css({"color": "red"});
       }else {
            $("#bp_vraag" + (i + 1)).css({"color": "white"});
       }
    }
    return correctQuestions; 
}

$(function(){
        $("input[name='v_vraag1']").click(function ()  { scroll($('#v_vraag1'));  $('#v_vraag2').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag2']").click(function ()  { scroll($('#v_vraag2'));   $('#v_vraag3').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag3']").click(function ()  { scroll($('#v_vraag3'));   $('#v_vraag4').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag4']").click(function ()  { scroll($('#v_vraag4'));   $('#v_vraag5').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag5']").click(function ()  { scroll($('#v_vraag5'));   $('#v_vraag6').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag6']").click(function ()  { scroll($('#v_vraag6'));   $('#v_vraag7').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag7']").click(function ()  { scroll($('#v_vraag7'));   $('#v_vraag8').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag8']").click(function ()  { scroll($('#v_vraag8'));   $('#v_vraag9').fadeIn("slow");   createResults();    });
        $("input[name='v_vraag9']").click(function ()  { scroll($('#v_vraag9'));   $('#v_vraag10').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag10']").click(function () { scroll($('#v_vraag10'));   $('#v_vraag11').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag11']").click(function () { scroll($('#v_vraag11'));   $('#v_vraag12').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag12']").click(function () { scroll($('#v_vraag12'));   $('#v_vraag13').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag13']").click(function () { scroll($('#v_vraag13'));   $('#v_vraag14').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag14']").click(function () { scroll($('#v_vraag14'));   $('#v_vraag15').fadeIn("slow");  createResults();    });
		    $("input[name='v_vraag15']").click(function () { scroll($('#v_vraag15'));   $('#v_vraag16').fadeIn("slow");  createResults();    });
        $("input[name='v_vraag16']").click(function () { scroll($('#v_vraag16'));   
                  $('#endOfVergelijken').fadeIn("slow");
                  $('#afterTest').show();
                  $('#beforeTest').hide();  
                  $('.generated').show();
                  Element.prototype.documentOffsetTop = function () {
                  return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop() : 0 );
              };
              
              var top = document.getElementById( 'v_vraag16' ).documentOffsetTop() - ( window.innerHeight / 2 );
              window.scrollTo( 0, top );
                  createResults();
              });
});

var lowImpactImage = "<img src='printimages/icon_dots_one.png' height='22' width='66'>";
var mediumImpactImage = "<img src='printimages/icon_dots_two.png' height='22' width='66'>";
var highImpactImage = "<img src='printimages/icon_dots_three.png' height='22' width='66'>";
var unknownImpactImage ="<img src='printimages/icon_dots_zero.png' height='22' width='66'>";
var subjectQuestions = ["Duur","Behandeling","Gevolgen Lang Termijn","Gevolgen Korte Termijn", "Follow-Up"];
var preferenceQuestionsRadiotherapy = [];
var preferenceQuestionsChemotherapy = [];
var preferenceQuestionsSurgery = [];

var catParticipateAgree = [];
var catParticipateNeutral = [];
var catParticipateDisagree = [];
var catNotParticipateAgree = [];
var catNotParticipateNeutral = [];
var catNotParticipateDisagree = [];


var topics = [  "Langer leven", 
                "Effectievere behandeling",
                "Betere hulpverlening",
                "Helpen anderen",
                "Druk om mee te doen",
                "Controle",
                "Teleurstelling",
                "Extra tijd/moeite",
                "Niet genoeg info",
                "Geen toegevoegde waarde voor mij persoonlijk",
                "Impact",
                "Negatieve ervaringen", 
                "Bijwerkingen", 
                "Latere start behandeling",
                "Extra reistijd",
                "Te belastend"
                ];


function getCategoryQuestion(startIndex, stopIndex, expectedValue) {
    var categoryQuestions = [];
    
    for(var i=startIndex; i<stopIndex; i++){
        
        var questionNumber = i+1;
        if($('input[name="v_vraag'+questionNumber+'"]:checked').val() === expectedValue)
            categoryQuestions.push(i);
    }
    return categoryQuestions;
}


function createResults () {

        var startIndexCol1 = 0;
        var startIndexCol2 = 6;
        var startIndexCol3 = 16;

        catParticipateAgree = getCategoryQuestion(startIndexCol1,startIndexCol2,"agree");
        catParticipateNeutral = getCategoryQuestion(startIndexCol1,startIndexCol2,"neutral");
        catParticipateDisagree = getCategoryQuestion(startIndexCol1,startIndexCol2,"disagree");
        catNotParticipateAgree = getCategoryQuestion(startIndexCol2,startIndexCol3,"agree");
        catNotParticipateNeutral = getCategoryQuestion(startIndexCol2,startIndexCol3,"neutral");
        catNotParticipateDisagree = getCategoryQuestion(startIndexCol2,startIndexCol3,"disagree");

        var resultsTableOutput = "";
            resultsTableOutput += "<table class='table text-left resultsTable' id='results'>";
            resultsTableOutput += "<thead><tr><th width='20%'>Categorie</th><th width='40%'>Wel deelnemen</th><th width='40%'>Niet deelnemen</th></tr></thead>";
            
            resultsTableOutput += getTableRow("Eens", catParticipateAgree, catNotParticipateAgree);
            resultsTableOutput += getTableRow("Neutraal", catParticipateNeutral, catNotParticipateNeutral);
            resultsTableOutput += getTableRow("Oneens", catParticipateDisagree, catNotParticipateDisagree);

            resultsTableOutput += "</table><BR>";

        // document.getElementById("legendaDIV").innerHTML = displayLegenda();  
        document.getElementById("resultsTable").innerHTML = resultsTableOutput;  
        return resultsTableOutput; 
}


function getTableRow(columnTitle, column1Values, column2Values){
    var row = "<tr>";
    row += "<th scope=\"row\">" + columnTitle + "</th>"
    row += getTableCell(column1Values);
    row += getTableCell(column2Values);
    return row += "</tr>";
}

function getTableCell(columnValues){
    var cell = "<td><ul>";
    columnValues.forEach(function(element){
        if(typeof element != 'undefined')
        cell += "<li>"+ topics[element] + "</li>"
    });
    cell += "</ul></td>";
    return cell;
}




function displayPreferenceImage(input) {
    var imagePrefOutput ="";
    switch(input) {
        case 1 :
            imagePrefOutput = lowImpactImage;
            return imagePrefOutput;
        case 2 :
            imagePrefOutput = mediumImpactImage;
            return imagePrefOutput;
        case 3 :
            imagePrefOutput = highImpactImage;
            return imagePrefOutput;
        default :
            imagePrefOutput = unknownImpactImage;
            return imagePrefOutput;
    }
}

function displayLegenda(){
    var legendaOutput = "";
    legendaOutput += "<table class='table' id='legenda'>";
    legendaOutput += "<thead><tr><td>Legenda:</td></tr></thead>";
    legendaOutput += "<tr><td>Low Impact</td><td>" + lowImpactImage + "</td></tr>";
    legendaOutput += "<tr><td>Medium Impact</td><td>" + mediumImpactImage + "</td></tr>";
    legendaOutput += "<tr><td>High Impact</td><td>" + highImpactImage + "</td></tr>";
    legendaOutput += "</table><BR>";
    return legendaOutput;
}

function displayCustomQuestions() {
    var message = $('#comments').val();
    return message;
}

function checkIfEmpty(arrayName, stringComment){
    if(arrayName.length > 0){   
            arrayName.join(', ');
    }else{
             arrayName[0] = stringComment;       
    }
}


function findAnswers(treatment, prefix, answer, output, subjects){
    var temp = "";
    for (var i = 0; i < treatment.length; i++){
        switch(parseInt(treatment[i])) {
            case answer :
                temp = " " + subjects[i] + " van " + prefix;
                output.push(temp);
                break;
            default :
                break;
        }
    }
}

function displayImpact(input){
    var impactAnswers = [];
        findAnswers(preferenceQuestionsSurgery,"operatie", input, impactAnswers, subjectQuestions);
        findAnswers(preferenceQuestionsRadiotherapy,"bestraling", input, impactAnswers, subjectQuestions);
        findAnswers(preferenceQuestionsChemotherapy,"chemoradiatie", input, impactAnswers, subjectQuestions);
        checkIfEmpty(impactAnswers, "Geen voorkeuren met kleine impact beantwoord.");
    return impactAnswers;
}


function printResults(){
    var printWindow = window.open("","Print","width=800,height=800,scrollbars=1,resizable=1");

    var contents = "";
    contents += "<html><head><meta charset='utf-8'><link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'><link href='https://fonts.googleapis.com/css?family=Montserrat:300' rel=stylesheet'></script></head><body style='font-family: Montserrat, Arial, Helvetica, sans-serif;'>";
    contents +="<div><h3 id='title' style='font-family: Montserrat, Arial, Helvetica, sans-serif;'>Overzicht resultaten trial tool</h3></div>";
    contents +="<p id='paragraph02' style='font-family: Arial, Helvetica, sans-serif;'></p>";
    contents +="<BR><HR><BR>";
    contents += createResults();
    contents +="<BR>";
    contents += "<BR><p id='ending' style='font-family: Arial, Helvetica, sans-serif;'><b>Vragen</b></p>";
    contents += displayCustomQuestions();
    contents +="<BR><HR><BR>";
    contents += "<BR><p id='ending' style='font-family: Arial, Helvetica, sans-serif;'><b>Wat moet ik nu met deze informatie?</b></p>";
    contents += "<p id='ending2' style='font-family: Arial, Helvetica, sans-serif;'>Het is de bedoeling dat u deze resultaten print en mee neemt naar uw arts. ";
    contents += "Uw arts kan op basis van deze gegevens behandelopties nogmaals uitleggen.";
    contents += "Daarnaast geeft de tabel inzicht in wat u belangrijk vindt in een behandeling. Niet tevreden?";
    contents += "U kunt de voorkeuren nog aanpassen en (opnieuw) printen door de vragen opnieuw in te vullen.</p>";

    printWindow.document.write(contents);
    setTimeout(function(){
        printWindow.print();
        printWindow.close();
    }, 1000);
}
