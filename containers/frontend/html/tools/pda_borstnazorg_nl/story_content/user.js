function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5jdthAakUjd":
        Script1();
        break;
      case "5mJo2gIuJVq":
        Script2();
        break;
      case "5sfdRAS11wI":
        Script3();
        break;
      case "5VFXJkxTpqk":
        Script4();
        break;
      case "65wskjqYiLI":
        Script5();
        break;
  }
}

function Script1()
{
  //////////////////////////////////////////////////
//// -  -  -  PRINTING RESULT SLIDE  -  -  -  ////
////   BREAST AFTERCARE PATIENT DECISION AID  ////
//// -  -  -  -  MAASTRO CLINIC   -  -  -  -  ////
//////////////////////////////////////////////////

var myWindow = window.open("","Print","width=500,height=800,scrollbars=1,resizable=1");
var player = GetPlayer();

//// DECLARE ALL THE VARIABLES
var contents;
var i;

var lastmeter = player.GetVar("Lastmeter");
var gezondheid = player.GetVar("Gezondheid");
var activiteiten = player.GetVar("Activiteiten");
var omgeving = player.GetVar("Omgeving");
var eigenmanier = player.GetVar("EigenManier");
var opmerkingen = player.GetVar("OverigeOpmerkingen");

var treatments = [];
treatments[0] = player.GetVar("Chemotherapie");
treatments[1] = player.GetVar("Hormoontherapie");
treatments[2] = player.GetVar("Immunotherapie");
treatments[3] = player.GetVar("Bestraling");
treatments[4] = player.GetVar("Operatie");

var sipp = [];
sipp[0] = player.GetVar("Sipp1");
sipp[1] = player.GetVar("Sipp2");
sipp[2] = player.GetVar("Sipp3");
sipp[3] = player.GetVar("Sipp4");

var sippInfo = [];
sippInfo[0] = player.GetVar("SippInfo1");
sippInfo[1] = player.GetVar("SippInfo2");
sippInfo[2] = player.GetVar("SippInfo3");
sippInfo[3] = player.GetVar("SippInfo4");

var controleVragen = [];
controleVragen [0] = player.GetVar("CheckVraag1");
controleVragen [1] = player.GetVar("CheckVraag2");

var sippAlert = player.GetVar("SippAlert");

var options = [];
options[0] = player.GetVar("Ziekenhuis");
options[1] = player.GetVar("Telefoon");
options[2] = player.GetVar("Aanvraag");

var keuzes = [];
keuzes[0] = player.GetVar("Keuze1");
keuzes[1] = player.GetVar("Keuze2");
keuzes[2] = player.GetVar("Keuze3");
keuzes[3] = player.GetVar("Keuze4");
keuzes[4] = player.GetVar("Keuze5");

var vragen = [];
vragen[0] = player.GetVar("Vraag3");
vragen[1] = player.GetVar("Vraag7");
vragen[2] = player.GetVar("Vraag9");
vragen[3] = player.GetVar("Vraag2");
vragen[4] = player.GetVar("Vraag10");
vragen[5] = player.GetVar("Vraag4");
vragen[6] = player.GetVar("Vraag1");
vragen[7] = player.GetVar("Vraag5");
vragen[8] = player.GetVar("Vraag8");
vragen[9] = player.GetVar("Vraag6");

var antwoordenVasteAfspraken = [];
antwoordenVasteAfspraken[0] = 2;
antwoordenVasteAfspraken[1] = 1;
antwoordenVasteAfspraken[2] = 1;
antwoordenVasteAfspraken[3] = 1;
antwoordenVasteAfspraken[4] = 9;
antwoordenVasteAfspraken[5] = 1;
antwoordenVasteAfspraken[6] = 2;
antwoordenVasteAfspraken[7] = 1;
antwoordenVasteAfspraken[8] = 1;
antwoordenVasteAfspraken[9] = 2;

var antwoordenTelefonisch = [];
antwoordenTelefonisch[0] = 2;
antwoordenTelefonisch[1] = 1;
antwoordenTelefonisch[2] = 2;
antwoordenTelefonisch[3] = 1;
antwoordenTelefonisch[4] = 9;
antwoordenTelefonisch[5] = 2;
antwoordenTelefonisch[6] = 1;
antwoordenTelefonisch[7] = 1;
antwoordenTelefonisch[8] = 1;
antwoordenTelefonisch[9] = 1;

var antwoordenOpAanvraag = [];
antwoordenOpAanvraag[0] = 2;
antwoordenOpAanvraag[1] = 2;
antwoordenOpAanvraag[2] = 2;
antwoordenOpAanvraag[3] = 2;
antwoordenOpAanvraag[4] = 9;
antwoordenOpAanvraag[5] = 1;
antwoordenOpAanvraag[6] = 2;
antwoordenOpAanvraag[7] = 2;
antwoordenOpAanvraag[8] = 1;
antwoordenOpAanvraag[9] = 1;

var voorkeurenKeuzeImage = [];
voorkeurenKeuzeImage[0] = "keuze_zorgverlener";
voorkeurenKeuzeImage[1] = "keuze_frequentie";
voorkeurenKeuzeImage[2] = "keuze_gezinsleden";
voorkeurenKeuzeImage[3] = "keuze_inplannen";
voorkeurenKeuzeImage[4] = "keuze_kosten";
voorkeurenKeuzeImage[5] = "keuze_lichamelijkonderzoek";
voorkeurenKeuzeImage[6] = "keuze_locatie";
voorkeurenKeuzeImage[7] = "keuze_startnazorg";
voorkeurenKeuzeImage[8] = "keuze_vormnazorg";
voorkeurenKeuzeImage[9] = "keuze_hoeveelheidtijd";

var voorkeurenVasteAfspraken = [];
voorkeurenVasteAfspraken[0] = "00_verpleegkundige";
voorkeurenVasteAfspraken[1] = "01_bepaleninoverleg";
voorkeurenVasteAfspraken[2] = "02a_gesprekken";
voorkeurenVasteAfspraken[3] = "03a_vasteafspraken";
voorkeurenVasteAfspraken[4] = "04_verzekering";
voorkeurenVasteAfspraken[5] = "05a_verzoek";
voorkeurenVasteAfspraken[6] = "06a_ziekenhuis";
voorkeurenVasteAfspraken[7] = "07a_bepalen";
voorkeurenVasteAfspraken[8] = "08_individueel";
voorkeurenVasteAfspraken[9] = "09a_duur";

var voorkeurenTelefonisch = [];
voorkeurenTelefonisch[0] = "00_verpleegkundige";
voorkeurenTelefonisch[1] = "01_bepaleninoverleg";
voorkeurenTelefonisch[2] = "02b_gesprekken";
voorkeurenTelefonisch[3] = "03a_vasteafspraken";
voorkeurenTelefonisch[4] = "04_verzekering";
voorkeurenTelefonisch[5] = "05b_verzoek";
voorkeurenTelefonisch[6] = "06b_ziekenhuis";
voorkeurenTelefonisch[7] = "07a_bepalen";
voorkeurenTelefonisch[8] = "08_individueel";
voorkeurenTelefonisch[9] = "09b_duur";

var voorkeurenOpAanvraag = [];
voorkeurenOpAanvraag[0] = "00_verpleegkundige";
voorkeurenOpAanvraag[1] = "01_bepaleninoverleg";
voorkeurenOpAanvraag[2] = "02a_gesprekken";
voorkeurenOpAanvraag[3] = "03b_vasteafspraken";
voorkeurenOpAanvraag[4] = "04_verzekering";
voorkeurenOpAanvraag[5] = "05a_verzoek";
voorkeurenOpAanvraag[6] = "06a_ziekenhuis";
voorkeurenOpAanvraag[7] = "07b_bepalen";
voorkeurenOpAanvraag[8] = "08_individueel";
voorkeurenOpAanvraag[9] = "09a_duur";

var antwoordenVragenlijst = [];
antwoordenVragenlijst[0] = player.GetVar("MijnGezondheid1");
antwoordenVragenlijst[1] = player.GetVar("Lichamelijk1");
antwoordenVragenlijst[2] = player.GetVar("Lichamelijk2");
antwoordenVragenlijst[3] = player.GetVar("Lichamelijk3");
antwoordenVragenlijst[4] = player.GetVar("Lichamelijk4");
antwoordenVragenlijst[5] = player.GetVar("Lichamelijk5");
antwoordenVragenlijst[6] = player.GetVar("Lichamelijk6");
antwoordenVragenlijst[7] = player.GetVar("Lichamelijk7");
antwoordenVragenlijst[8] = player.GetVar("Lichamelijk8");
antwoordenVragenlijst[9] = player.GetVar("Lichamelijk9");
antwoordenVragenlijst[10] = player.GetVar("Lichamelijk23");
antwoordenVragenlijst[11] = player.GetVar("Lichamelijk24");
antwoordenVragenlijst[12] = player.GetVar("Emotioneel1");
antwoordenVragenlijst[13] = player.GetVar("Emotioneel2");
antwoordenVragenlijst[14] = player.GetVar("Emotioneel3");
antwoordenVragenlijst[15] = player.GetVar("Emotioneel4");
antwoordenVragenlijst[16] = player.GetVar("Emotioneel5");
antwoordenVragenlijst[17] = player.GetVar("Emotioneel6");
antwoordenVragenlijst[18] = player.GetVar("Emotioneel7");
antwoordenVragenlijst[19] = player.GetVar("Emotioneel8");
antwoordenVragenlijst[20] = player.GetVar("Emotioneel9");
antwoordenVragenlijst[21] = player.GetVar("Emotioneel10");
antwoordenVragenlijst[22] = player.GetVar("Cognitief1");
antwoordenVragenlijst[23] = player.GetVar("Cognitief2");
antwoordenVragenlijst[24] = player.GetVar("MijnActiviteiten1");
antwoordenVragenlijst[25] = player.GetVar("Praktisch1");
antwoordenVragenlijst[26] = player.GetVar("Praktisch2");
antwoordenVragenlijst[27] = player.GetVar("Praktisch3");
antwoordenVragenlijst[28] = player.GetVar("Praktisch4");
antwoordenVragenlijst[29] = player.GetVar("Praktisch5");
antwoordenVragenlijst[30] = player.GetVar("Praktisch6");
antwoordenVragenlijst[31] = player.GetVar("MijnOmgeving1");
antwoordenVragenlijst[32] = player.GetVar("Gezin1");
antwoordenVragenlijst[33] = player.GetVar("Gezin2");
antwoordenVragenlijst[34] = player.GetVar("Gezin3");
antwoordenVragenlijst[35] = player.GetVar("Gezin4");
antwoordenVragenlijst[36] = player.GetVar("Gezin5");
antwoordenVragenlijst[37] = player.GetVar("Gezin6");
antwoordenVragenlijst[38] = player.GetVar("Gezin7");
antwoordenVragenlijst[39] = player.GetVar("Gezin8");
antwoordenVragenlijst[40] = player.GetVar("Gezin9");
antwoordenVragenlijst[41] = player.GetVar("Gezin10");
antwoordenVragenlijst[42] = player.GetVar("EigenManier1");
antwoordenVragenlijst[43] = player.GetVar("Eigen1");
antwoordenVragenlijst[44] = player.GetVar("Eigen2");
antwoordenVragenlijst[45] = player.GetVar("Eigen3");
antwoordenVragenlijst[46] = player.GetVar("Eigen4");
antwoordenVragenlijst[47] = player.GetVar("OverigeOpmerkingen");

////// EXECUTE ALL THE FUNCTIONS
writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
	contents = "<!DOCTYPE html><html><head><title>Keuzehulpmiddel Borstkanker Nazorg</title></head><body style='font-family: Arial, Helvetica, sans-serif;'>";
	contents += createTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createImageTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createQuestionTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createSippTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += printDate();
	contents += "</body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function displayKeuze(inputkeuze, keuzeSource, vergelijkingkeuze) {
	var output;
	switch(inputkeuze){
		case "ZORGVERLENER" :
			output = colorImages(keuzeSource[0], vragen[0], vergelijkingkeuze[0]);
			return output;
		case "FREQUENTIE" :
			output = colorImages(keuzeSource[1], vragen[1], vergelijkingkeuze[1]);
			return output;	
		case "GEZINSLEDEN" :
			output = colorImages(keuzeSource[2], vragen[2], vergelijkingkeuze[2]);
			return output;	
		case "INPLANNEN" :
			output = colorImages(keuzeSource[3], vragen[3], vergelijkingkeuze[3]);
			return output;
		case "KOSTEN" :
			output = colorImages(keuzeSource[4], vragen[4], vergelijkingkeuze[4]);
			return output;	
		case "LICHAMELIJK ONDERZOEK" :
			output = colorImages(keuzeSource[5], vragen[5], vergelijkingkeuze[5]);
			return output;
		case "LOCATIE" :
			output = colorImages(keuzeSource[6], vragen[6], vergelijkingkeuze[6]);
			return output;
		case "START NAZORG" :
			output = colorImages(keuzeSource[7], vragen[7], vergelijkingkeuze[7]);
			return output;
		case "VORM NAZORG" :
			output = colorImages(keuzeSource[8], vragen[8], vergelijkingkeuze[8]);
			return output;	
		case "HOEVEELHEID TIJD" :
			output = colorImages(keuzeSource[9], vragen[9], vergelijkingkeuze[9]);
			return output;	
		default : 
			alert("Er gaat iets fout bij:" + inputkeuze);
			break;
	}
}

function headerImages(imageBase, optionValue) {
	var imageOutput = "<img src='printimages/";		
	if (optionValue > 0) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function colorImages (imageBase, vraagInput, vraagAntwoord){
	var imageOutput = "<img src='printimages/";		
	if (vraagInput === vraagAntwoord) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function createTable() {
	var tableOutput = "";
	tableOutput += "<table><tr><td><img src='printimages/t1_t1.jpg'></td>";
	tableOutput += "<td>"+ headerImages("t1_t2", options[0])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t3", options[1])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t4", options[2])+"</td>";
		for (i = 0; i < keuzes.length; i++){
			tableOutput += "<tr>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenKeuzeImage, 0)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenVasteAfspraken, antwoordenVasteAfspraken)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenTelefonisch, antwoordenTelefonisch)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenOpAanvraag, antwoordenOpAanvraag)+"</td>";
			tableOutput += "</tr>";
		}
	tableOutput += "</table>";
	return tableOutput;
}

function printDate(){
	var d = new Date();
	var theDate = "Geprint op: ";
	theDate += d.getDate();
	theDate += " - ";
	theDate += d.getMonth() + 1;
	theDate += " - ";
	theDate += d.getFullYear();
	return theDate;
}

function createImageTable() {
	var content = "<table><tr><td>";
	content += "<table><tr><td><div style='position:relative;'>";
	content += "<img src='printimages/icon1.jpg'><h2 style='position: absolute; top:100px; padding: 50px; font-family: sans-serif;'>" + gezondheid + " / " + setOutputNumber() + " </h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon2.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + activiteiten + " / 6</h2>";
	content += "</div></td></tr><tr><td><div style='position:relative;''>";
	content += "<img  src='printimages/icon3.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + omgeving + " / 10</h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon4.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + eigenmanier + " / 4</h2>";
	content += "</div></td></tr></table>";
	content += "</td><td valign='top'>";
	content += "1. Bij de 'Lastmeter' gaf u een score van "+ lastmeter +" aan. <br>";
	content += "2. In de lijst ‘Gezondheid’ beantwoordde u " + gezondheid + " van de "+setOutputNumber()+" vragen met JA of SOMS. <br>";
	content += "3. In de lijst ‘Activiteiten’ beantwoordde u " + activiteiten + " van de 6 vragen met JA of SOMS. <br>"; 
	content += "4. In de lijst ‘Omgeving’ beantwoordde u " + omgeving + " van de 10 vragen met JA of SOMS. <br>";
	content += "5. In de lijst ‘Eigen manier’ beantwoordde u " + eigenmanier + " van de 4 vragen met JA of SOMS. <br>";
	content += "<br><br>Opmerkingen:<br><br>" + opmerkingen;
	content += "</td></tr></table>";
	return content;
}

function setOutputNumber(){
	var output;
	for (i = 0; i < treatments.length; i++){
			if(treatments[i] === true) {
				var number = i + 1;
				switch(number){
					case 1 : 
						output = 36;
						return output;
					case 2 : 
						output = 36;
						return output;
					case 3 : 
						output = 36;
						return output;
					case 4 : 
						output = 25;
						return output;
					case 5 : 
						output = 23;
						return output;
				}
			}
	}
}

function createSippTable() {
	var content ="";
	content += "";
	content += "<h1>OVERZICHT ZORGVERLENER</h1>";
	content += "<p>Informatie voor de SIPP score</p>";
	content += "A. Blok 1 Beantwoorde vragen met JA  - "+ sipp[0] +"<br> B. Blok 2 Beantwoorde vragen met JA - " + sipp[1] + "<br>";
	content += "C. Blok 3 Beantwoorde vragen met JA  - "+ sipp[2] +"<br> D. Blok 4 Beantwoorde vragen met JA - " + sipp[3] + "<br>";
	content += "De vraag zou u graag met een hulpverlener willen praten werd beantwoord met - "+ controleVragen[0] + "<br>";
	content += "de vraag wenst u voor dit probleem begeleiding door een hulpverlener werd beantwoord met - "+ controleVragen[1];
	content += "<p>Indicatie voor doorverwijzing</p>";
	content += "A. "+ sippInfo[0] +"<br>B. "+sippInfo[1]+"<br>C. "+sippInfo[2]+"<br>D. "+sippInfo[3];
	content += "<p>De Lastmeter</p>";
	content += "Op een Lastmeter met een schaal van 0 tot 10 (geen tot veel last) scoort u een -  "+ lastmeter +"<br>Let op! " + sippAlert;
	return content;
}

function createQuestionTable() {
	var content ="";
	content += "<h1>UW VRAGENLIJST</h1>";
	content += "<p>1. De Lastmeter op een schaal van 0 tot 10 (geen tot veel last)</p>";
	content += "Op een schaal van 0 tot 10 scoort u een -  " + lastmeter;
	content += "<p>2. Mijn gezondheid</p>";
	content += "Op de vraag hoe u zich op dit moment voelt antwoordde u met -  " + antwoordenVragenlijst[0];
	content += "<p>Lichamelijk</p>";
	content += "1. Moeheidsklachten  -  "+ antwoordenVragenlijst[1] +"<br>2. Slaapproblemen  -  "+ antwoordenVragenlijst[2] +"<br>3. Gewichtsverlies  -  "+ antwoordenVragenlijst[3];
	content += "<br>4. Slechte eetlust  -  " + antwoordenVragenlijst[4] +"<br>5. Duizeligheid  -  "+ antwoordenVragenlijst[5]+"<br>6. Pijnklachten  -  "+antwoordenVragenlijst[6];
	content += "<br>7. Conditieverlies  -  "+ antwoordenVragenlijst[7] +"<br>8. Verminderde spierkracht  -  "+ antwoordenVragenlijst[8] +"<br>9. Problemen met uiterlijk  -  "+antwoordenVragenlijst[9];
	content += "<br>10. Oedeem arm  -  "+ antwoordenVragenlijst[10] +"<br>11. Functieverlies arm  -  "+antwoordenVragenlijst[11];
	content += "<p>Emotioneel</p>";
	content += "1. Piekeren  -  "+ antwoordenVragenlijst[12] +"<br>2. Rusteloosheid  -  "+ antwoordenVragenlijst[13] +"<br>3. Gevoelens van eenzaamheid  -  "+ antwoordenVragenlijst[14] ;
	content += "<br>4. Gevoelens van verdriet  -  " + antwoordenVragenlijst[15] +"<br>5. Gevoelens van verlies  -  "+ antwoordenVragenlijst[16] +"<br>6. Minder grip op eigen emoties  -  "+ antwoordenVragenlijst[17] ;
	content += "<br>7. Verminderd zelfvertrouwen  -  " + antwoordenVragenlijst[18] +"<br>8. Angst voor ziekte - behandeling  -  "+ antwoordenVragenlijst[19] +"<br>9. Gevoelens van neerslachtigheid  -  "+ antwoordenVragenlijst[20] ;
	content += "<br>10. Gevoelens van wanhoop  -  " + antwoordenVragenlijst[21];
	content += "<p>Cognitief</p>";
	content += "1. Problemen met herinneren van dingen  -  " + antwoordenVragenlijst[22] + "<br>2. Concentratie problemen  -  " + antwoordenVragenlijst[23];
	content += "<p>3. Mijn activiteiten</p>";
	content += "Op de vraag welke voor u belangrijke activiteiten gaan er minder goed antwoordde u met -  "+ antwoordenVragenlijst[24];
	content += "<p>Praktisch</p>";
	content += "1. Beperkingen in dagelijks functioneren  -  "+antwoordenVragenlijst[25]+"<br>2. Problemen met zorg voor kinderen  -  "+antwoordenVragenlijst[26];
	content += "<br>3. Problemen met huishouden  -  "+antwoordenVragenlijst[27]+"<br>4. Problemen met vervoer  -  "+antwoordenVragenlijst[28];
	content += "<br>5. Problemen met werk - school - studie  -  "+ antwoordenVragenlijst[29]+"<br>6. Problemen met wassen - aankleden  -  "+ antwoordenVragenlijst[30];
	content += "<p>4. Mijn omgeving</p>";
	content += "Op de vraag ervaart u problemen met uw omgeving door uw ziekte en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[31];
	content += "<p>Gezin - Sociaal</p>";
	content += "1. Onvoldoende steun door de mensen in uw omgeving  -  " + antwoordenVragenlijst[32] + "<br>2. Problemen in omgang met uw familie - vrienden  -  " + antwoordenVragenlijst[33];
	content += "<br>3. Problemen in omgang met uw kinderen  -  "+ antwoordenVragenlijst[34] +"<br>4. Problemen in omgang met uw partner  -  " + antwoordenVragenlijst[35];
	content += "<br>5. Problemen met intimiteit met uw partner  -  "+ antwoordenVragenlijst[36] +"<br>6. Minder zin in vrijen  -  "+ antwoordenVragenlijst[37];
	content += "<br>7. Wenst u voor dit probleem begeleiding door een hulpverlener  -  " + antwoordenVragenlijst[38];
	content += "<p>Praktisch</p>";
	content += "1. Financiële problemen  -  "+ antwoordenVragenlijst[39] + "<br>2. Problemen met verzekering  -  " + antwoordenVragenlijst[40];
	content += "<br>3. Problemen met wonen - huisvesting  -  " + antwoordenVragenlijst[41];
	content += "<p>5. Mijn eigen manier</p>";
	content += "Op de vraag ervaart u problemen  in de manier waarop u met uw ziekte en de gevolgen ervan het omgaat en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[42];
	content += "<p>Overige vragen</p>";
	content += "1. Onvoldoende kunnen praten over het feit dat u kanker heeft  -  " + antwoordenVragenlijst[43] + "<br>2. Zou u graag met een hulpverlener willen praten  -  " + antwoordenVragenlijst[44];
	content += "<br>3. Vragen over zin van het leven - levensbeschouwing  -  " + antwoordenVragenlijst[45] + "<br>4. Veranderingen in vertrouwen in God - geloof  -  " + antwoordenVragenlijst[46];
	content += "<p>Overige opmerkingen</p>";
	content += "Op de vraag wat wilt u zelf graag met de zorgverlener bespreken tijdens het nazorggesprek? antwoordde u met -  " + antwoordenVragenlijst[47];
	return content;
}
}

function Script2()
{
  var p = GetPlayer();

var content14 = "<h1>1. Voorkeuren en opties</h1>"
var content16 = "<p>Ziekenhuis</p>"
var args13 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Ziekenhuis1")+"  -  "+p.GetVar("Veld1")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Ziekenhuis2")+"  -  "+p.GetVar("Veld2")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Ziekenhuis3")+"  -  "+p.GetVar("Veld3")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Ziekenhuis4")+"  -  "+p.GetVar("Veld4")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Ziekenhuis5")+"  -  "+p.GetVar("Veld5");
var content17 = "<p>Telefonisch</p>"
var args14 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Telefonisch1")+"  -  "+p.GetVar("Veld6")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Telefonisch2")+"  -  "+p.GetVar("Veld7")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Telefonisch3")+"  -  "+p.GetVar("Veld8")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Telefonisch4")+"  -  "+p.GetVar("Veld9")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Telefonisch5")+"  -  "+p.GetVar("Veld10");
var content18 = "<p>Op aanvraag</p>"
var args15 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Aanvraag1")+"  -  "+p.GetVar("Veld11")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Aanvraag2")+"  -  "+p.GetVar("Veld12")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Aanvraag3")+"  -  "+p.GetVar("Veld13")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Aanvraag4")+"  -  "+p.GetVar("Veld14")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Aanvraag5")+"  -  "+p.GetVar("Veld15");
var content19 = "<h1>2. Samenvatting vragenlijst</h1>"
var content20 = "<p>Lastmeter en Domeinen</p>"
var args16 = "Op een Lastmeter met een schaal van 0 tot 10 (geen tot veel last) scoort u een -  "+p.GetVar("Lastmeter")+"<br>"+"Hoeveel van de 23 vragen binnen het domein Gezondheid werden met Ja of Soms beantwoord? -  "+p.GetVar("Gezondheid")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Activiteiten werden met Ja of Soms beantwoord? -  "+p.GetVar("Activiteiten")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Omgeving werden met Ja of Soms beantwoord? -  "+p.GetVar("Omgeving")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Eigen manier werden met Ja of Soms beantwoord? -  "+p.GetVar("EigenManier");
var content21 = "<p>Informatie voor de hulpverlener</p>"
var args17 = "Op de vragen uit de screenings vragenlijst psychosociale problemen (SIPP) worden de volgende vier scores behaald - "+p.GetVar("Leeg")+"<br>"+"Blok 1 -  "+p.GetVar("Sipp1")+"  -  "+"Blok 2 -  "+p.GetVar("Sipp2")+"  -  "+"Blok 3 -  "+p.GetVar("Sipp3")+"  -  "+"Blok 4 -  "+p.GetVar("Sipp4")+"<br>"+"Verder werd de vraag (Zou u graag met een hulpverlener willen praten?) beantwoord met -  "+p.GetVar("CheckVraag1")+"<br>"+"En de vraag (Wenst u voor dit probleem begeleiding door een hulpverlener?) beantwoord met -  "+p.GetVar("CheckVraag2");
var content22 = "<p>Verklaring SIPP - score</p>"
var args18 = " - "+p.GetVar("SippInfo");
var content13 = "<h1>Overzicht vragenlijst</h1>"
var content = "<p>1. De Lastmeter op een schaal van 0 tot 10 (geen tot veel last)</p>"
var args = "Op een schaal van 0 tot 10 scoort u een -  "+p.GetVar("Lastmeter");
var content1 = "<p>2. Mijn gezondheid</p>"
var args1 = "Op de vraag hoe u zich op dit moment voelt antwoordde u met -  "+p.GetVar("MijnGezondheid1");
var content2 = "<p>Lichamelijk</p>"
var args2 = "1. Moeheidsklachten  -  "+p.GetVar("Lichamelijk1")+"<br>"+"2. Slaapproblemen  -  "+p.GetVar("Lichamelijk2")+"<br>"+"3. Gewichtsverlies  -  "+p.GetVar("Lichamelijk3")+"<br>"+"4. Slechte eetlust  -  "+p.GetVar("Lichamelijk4")+"<br>"+"5. Duizeligheid  -  "+p.GetVar("Lichamelijk5")+"<br>"+"6. Pijnklachten  -  "+p.GetVar("Lichamelijk6")+"<br>"+"7. Conditieverlies  -  "+p.GetVar("Lichamelijk7")+"<br>"+"8. Verminderde spierkracht  -  "+p.GetVar("Lichamelijk8")+"<br>"+"9. Problemen met uiterlijk  -  "+p.GetVar("Lichamelijk9")+"<br>"+"10. Oedeem arm  -  "+p.GetVar("Lichamelijk23")+"<br>"+"11. Functieverlies arm  -  "+p.GetVar("Lichamelijk24");
var content3 = "<p>Emotioneel</p>"
var args3 = "1. Piekeren  -  "+p.GetVar("Emotioneel1")+"<br>"+"2. Rusteloosheid  -  "+p.GetVar("Emotioneel2")+"<br>"+"3. Gevoelens van eenzaamheid  -  "+p.GetVar("Emotioneel3")+"<br>"+"4. Gevoelens van verdriet  -  "+p.GetVar("Emotioneel4")+"<br>"+"5. Gevoelens van verlies  -  "+p.GetVar("Emotioneel5")+"<br>"+"6. Minder grip op eigen emoties  -  "+p.GetVar("Emotioneel6")+"<br>"+"7. Verminderd zelfvertrouwen  -  "+p.GetVar("Emotioneel7")+"<br>"+"8. Angst voor ziekte - behandeling  -  "+p.GetVar("Emotioneel8")+"<br>"+"9. Gevoelens van neerslachtigheid  -  "+p.GetVar("Emotioneel9")+"<br>"+"10. Gevoelens van wanhoop  -  "+p.GetVar("Emotioneel10");
var content4 = "<p>Cognitief</p>"
var args4 = "1. Problemen met herinneren van dingen  -  "+p.GetVar("Cognitief1")+"<br>"+"2. Concentratie problemen  -  "+p.GetVar("Cognitief2");
var content5 = "<p>3. Mijn activiteiten</p>"
var args5 = "Op de vraag welke voor u belangrijke activiteiten gaan er minder goed antwoordde u met -  "+p.GetVar("MijnActiviteiten1");
var content6 = "<p>Praktisch</p>"
var args6 = "1. Beperkingen in dagelijks functioneren  -  "+p.GetVar("Praktisch1")+"<br>"+"2. Problemen met zorg voor kinderen  -  "+p.GetVar("Praktisch2")+"<br>"+"3. Problemen met huishouden  -  "+p.GetVar("Praktisch3")+"<br>"+"4. Problemen met vervoer  -  "+p.GetVar("Praktisch4")+"<br>"+"5. Problemen met werk - school - studie  -  "+p.GetVar("Praktisch5")+"<br>"+"6. Problemen met wassen - aankleden  -  "+p.GetVar("Praktisch6");
var content7 = "<p>4. Mijn omgeving</p>"
var args7 = "Op de vraag ervaart u problemen met uw omgeving door uw ziekte en zo ja, welke? antwoordde u met -  "+p.GetVar("MijnOmgeving1");
var content8 = "<p>Gezin - Sociaal</p>"
var args8 = "1. Onvoldoende steun door de mensen in uw omgeving  -  "+p.GetVar("Gezin1")+"<br>"+"2. Problemen in omgang met uw familie - vrienden  -  "+p.GetVar("Gezin2")+"<br>"+"3. Problemen in omgang met uw kinderen  -  "+p.GetVar("Gezin3")+"<br>"+"4. Problemen in omgang met uw partner  -  "+p.GetVar("Gezin4")+"<br>"+"5. Problemen met intimiteit met uw partner  -  "+p.GetVar("Gezin5")+"<br>"+"6. Minder zin in vrijen  -  "+p.GetVar("Gezin6")+"<br>"+"7. Wenst u voor dit probleem begeleiding door een hulpverlener  -  "+p.GetVar("Gezin7");
var content9 = "<p>Praktisch</p>"
var args9 = "1. Financiële problemen  -  "+p.GetVar("Gezin8")+"<br>"+"2. Problemen met verzekering  -  "+p.GetVar("Gezin9")+"<br>"+"3. Problemen met wonen - huisvesting  -  "+p.GetVar("Gezin10");
var content10 = "<p>5. Mijn eigen manier</p>"
var args10 = "Op de vraag ervaart u problemen  in de manier waarop u met uw ziekte en de gevolgen ervan het omgaat en zo ja, welke? antwoordde u met -  "+p.GetVar("EigenManier1");
var content11 = "<p>Overige vragen</p>"
var args11 = "1. Onvoldoende kunnen praten over het feit dat u kanker heeft  -  "+p.GetVar("Eigen1")+"<br>"+"2. Zou u graag met een hulpverlener willen praten  -  "+p.GetVar("Eigen2")+"<br>"+"3. Vragen over zin van het leven - levensbeschouwing  -  "+p.GetVar("Eigen3")+"<br>"+"4. Veranderingen in vertrouwen in God - geloof  -  "+p.GetVar("Eigen4");
var content12 = "<p>Overige opmerkingen</p>"
var args12 = "Op de vraag wat wilt u zelf graag met de zorgverlener bespreken tijdens het nazorggesprek? antwoordde u met -  "+p.GetVar("OverigeOpmerkingen");

var url = "print.html?="+content14+content16+args13+content17+args14+content18+args15+content19+content20+args16+content21+args17+content22+args18+content13+content+args+content1+args1+content2+args2+content3+args3+content4+args4+content5+args5+content6+args6+content7+args7+content8+args8+content9+args9+content10+args10+content11+args11+content12+args12;

window.open(url,"_blank");
}

function Script3()
{
  //////////////////////////////////////////////////
//// -  -  -  PRINTING RESULT SLIDE  -  -  -  ////
////   BREAST AFTERCARE PATIENT DECISION AID  ////
//// -  -  -  -  MAASTRO CLINIC   -  -  -  -  ////
//////////////////////////////////////////////////

var myWindow = window.open("","Print","width=500,height=800,scrollbars=1,resizable=1");
var player = GetPlayer();

//// DECLARE ALL THE VARIABLES
var contents;
var i;

var lastmeter = player.GetVar("Lastmeter");
var gezondheid = player.GetVar("Gezondheid");
var activiteiten = player.GetVar("Activiteiten");
var omgeving = player.GetVar("Omgeving");
var eigenmanier = player.GetVar("EigenManier");
var opmerkingen = player.GetVar("OverigeOpmerkingen");

var treatments = [];
treatments[0] = player.GetVar("Chemotherapie");
treatments[1] = player.GetVar("Hormoontherapie");
treatments[2] = player.GetVar("Immunotherapie");
treatments[3] = player.GetVar("Bestraling");
treatments[4] = player.GetVar("Operatie");

var sipp = [];
sipp[0] = player.GetVar("Sipp1");
sipp[1] = player.GetVar("Sipp2");
sipp[2] = player.GetVar("Sipp3");
sipp[3] = player.GetVar("Sipp4");

var sippInfo = [];
sippInfo[0] = player.GetVar("SippInfo1");
sippInfo[1] = player.GetVar("SippInfo2");
sippInfo[2] = player.GetVar("SippInfo3");
sippInfo[3] = player.GetVar("SippInfo4");

var controleVragen = [];
controleVragen [0] = player.GetVar("CheckVraag1");
controleVragen [1] = player.GetVar("CheckVraag2");

var sippAlert = player.GetVar("SippAlert");

var options = [];
options[0] = player.GetVar("Ziekenhuis");
options[1] = player.GetVar("Telefoon");
options[2] = player.GetVar("Aanvraag");

var keuzes = [];
keuzes[0] = player.GetVar("Keuze1");
keuzes[1] = player.GetVar("Keuze2");
keuzes[2] = player.GetVar("Keuze3");
keuzes[3] = player.GetVar("Keuze4");
keuzes[4] = player.GetVar("Keuze5");

var vragen = [];
vragen[0] = player.GetVar("Vraag3");
vragen[1] = player.GetVar("Vraag7");
vragen[2] = player.GetVar("Vraag9");
vragen[3] = player.GetVar("Vraag2");
vragen[4] = player.GetVar("Vraag10");
vragen[5] = player.GetVar("Vraag4");
vragen[6] = player.GetVar("Vraag1");
vragen[7] = player.GetVar("Vraag5");
vragen[8] = player.GetVar("Vraag8");
vragen[9] = player.GetVar("Vraag6");

var antwoordenVasteAfspraken = [];
antwoordenVasteAfspraken[0] = 2;
antwoordenVasteAfspraken[1] = 1;
antwoordenVasteAfspraken[2] = 1;
antwoordenVasteAfspraken[3] = 1;
antwoordenVasteAfspraken[4] = 9;
antwoordenVasteAfspraken[5] = 1;
antwoordenVasteAfspraken[6] = 2;
antwoordenVasteAfspraken[7] = 1;
antwoordenVasteAfspraken[8] = 1;
antwoordenVasteAfspraken[9] = 2;

var antwoordenTelefonisch = [];
antwoordenTelefonisch[0] = 2;
antwoordenTelefonisch[1] = 1;
antwoordenTelefonisch[2] = 2;
antwoordenTelefonisch[3] = 1;
antwoordenTelefonisch[4] = 9;
antwoordenTelefonisch[5] = 2;
antwoordenTelefonisch[6] = 1;
antwoordenTelefonisch[7] = 1;
antwoordenTelefonisch[8] = 1;
antwoordenTelefonisch[9] = 1;

var antwoordenOpAanvraag = [];
antwoordenOpAanvraag[0] = 2;
antwoordenOpAanvraag[1] = 2;
antwoordenOpAanvraag[2] = 2;
antwoordenOpAanvraag[3] = 2;
antwoordenOpAanvraag[4] = 9;
antwoordenOpAanvraag[5] = 1;
antwoordenOpAanvraag[6] = 2;
antwoordenOpAanvraag[7] = 2;
antwoordenOpAanvraag[8] = 1;
antwoordenOpAanvraag[9] = 1;

var voorkeurenKeuzeImage = [];
voorkeurenKeuzeImage[0] = "keuze_zorgverlener";
voorkeurenKeuzeImage[1] = "keuze_frequentie";
voorkeurenKeuzeImage[2] = "keuze_gezinsleden";
voorkeurenKeuzeImage[3] = "keuze_inplannen";
voorkeurenKeuzeImage[4] = "keuze_kosten";
voorkeurenKeuzeImage[5] = "keuze_lichamelijkonderzoek";
voorkeurenKeuzeImage[6] = "keuze_locatie";
voorkeurenKeuzeImage[7] = "keuze_startnazorg";
voorkeurenKeuzeImage[8] = "keuze_vormnazorg";
voorkeurenKeuzeImage[9] = "keuze_hoeveelheidtijd";

var voorkeurenVasteAfspraken = [];
voorkeurenVasteAfspraken[0] = "00_verpleegkundige";
voorkeurenVasteAfspraken[1] = "01_bepaleninoverleg";
voorkeurenVasteAfspraken[2] = "02a_gesprekken";
voorkeurenVasteAfspraken[3] = "03a_vasteafspraken";
voorkeurenVasteAfspraken[4] = "04_verzekering";
voorkeurenVasteAfspraken[5] = "05a_verzoek";
voorkeurenVasteAfspraken[6] = "06a_ziekenhuis";
voorkeurenVasteAfspraken[7] = "07a_bepalen";
voorkeurenVasteAfspraken[8] = "08_individueel";
voorkeurenVasteAfspraken[9] = "09a_duur";

var voorkeurenTelefonisch = [];
voorkeurenTelefonisch[0] = "00_verpleegkundige";
voorkeurenTelefonisch[1] = "01_bepaleninoverleg";
voorkeurenTelefonisch[2] = "02b_gesprekken";
voorkeurenTelefonisch[3] = "03a_vasteafspraken";
voorkeurenTelefonisch[4] = "04_verzekering";
voorkeurenTelefonisch[5] = "05b_verzoek";
voorkeurenTelefonisch[6] = "06b_ziekenhuis";
voorkeurenTelefonisch[7] = "07a_bepalen";
voorkeurenTelefonisch[8] = "08_individueel";
voorkeurenTelefonisch[9] = "09b_duur";

var voorkeurenOpAanvraag = [];
voorkeurenOpAanvraag[0] = "00_verpleegkundige";
voorkeurenOpAanvraag[1] = "01_bepaleninoverleg";
voorkeurenOpAanvraag[2] = "02a_gesprekken";
voorkeurenOpAanvraag[3] = "03b_vasteafspraken";
voorkeurenOpAanvraag[4] = "04_verzekering";
voorkeurenOpAanvraag[5] = "05a_verzoek";
voorkeurenOpAanvraag[6] = "06a_ziekenhuis";
voorkeurenOpAanvraag[7] = "07b_bepalen";
voorkeurenOpAanvraag[8] = "08_individueel";
voorkeurenOpAanvraag[9] = "09a_duur";

var antwoordenVragenlijst = [];
antwoordenVragenlijst[0] = player.GetVar("MijnGezondheid1");
antwoordenVragenlijst[1] = player.GetVar("Lichamelijk1");
antwoordenVragenlijst[2] = player.GetVar("Lichamelijk2");
antwoordenVragenlijst[3] = player.GetVar("Lichamelijk3");
antwoordenVragenlijst[4] = player.GetVar("Lichamelijk4");
antwoordenVragenlijst[5] = player.GetVar("Lichamelijk5");
antwoordenVragenlijst[6] = player.GetVar("Lichamelijk6");
antwoordenVragenlijst[7] = player.GetVar("Lichamelijk7");
antwoordenVragenlijst[8] = player.GetVar("Lichamelijk8");
antwoordenVragenlijst[9] = player.GetVar("Lichamelijk9");
antwoordenVragenlijst[10] = player.GetVar("Lichamelijk23");
antwoordenVragenlijst[11] = player.GetVar("Lichamelijk24");
antwoordenVragenlijst[12] = player.GetVar("Emotioneel1");
antwoordenVragenlijst[13] = player.GetVar("Emotioneel2");
antwoordenVragenlijst[14] = player.GetVar("Emotioneel3");
antwoordenVragenlijst[15] = player.GetVar("Emotioneel4");
antwoordenVragenlijst[16] = player.GetVar("Emotioneel5");
antwoordenVragenlijst[17] = player.GetVar("Emotioneel6");
antwoordenVragenlijst[18] = player.GetVar("Emotioneel7");
antwoordenVragenlijst[19] = player.GetVar("Emotioneel8");
antwoordenVragenlijst[20] = player.GetVar("Emotioneel9");
antwoordenVragenlijst[21] = player.GetVar("Emotioneel10");
antwoordenVragenlijst[22] = player.GetVar("Cognitief1");
antwoordenVragenlijst[23] = player.GetVar("Cognitief2");
antwoordenVragenlijst[24] = player.GetVar("MijnActiviteiten1");
antwoordenVragenlijst[25] = player.GetVar("Praktisch1");
antwoordenVragenlijst[26] = player.GetVar("Praktisch2");
antwoordenVragenlijst[27] = player.GetVar("Praktisch3");
antwoordenVragenlijst[28] = player.GetVar("Praktisch4");
antwoordenVragenlijst[29] = player.GetVar("Praktisch5");
antwoordenVragenlijst[30] = player.GetVar("Praktisch6");
antwoordenVragenlijst[31] = player.GetVar("MijnOmgeving1");
antwoordenVragenlijst[32] = player.GetVar("Gezin1");
antwoordenVragenlijst[33] = player.GetVar("Gezin2");
antwoordenVragenlijst[34] = player.GetVar("Gezin3");
antwoordenVragenlijst[35] = player.GetVar("Gezin4");
antwoordenVragenlijst[36] = player.GetVar("Gezin5");
antwoordenVragenlijst[37] = player.GetVar("Gezin6");
antwoordenVragenlijst[38] = player.GetVar("Gezin7");
antwoordenVragenlijst[39] = player.GetVar("Gezin8");
antwoordenVragenlijst[40] = player.GetVar("Gezin9");
antwoordenVragenlijst[41] = player.GetVar("Gezin10");
antwoordenVragenlijst[42] = player.GetVar("EigenManier1");
antwoordenVragenlijst[43] = player.GetVar("Eigen1");
antwoordenVragenlijst[44] = player.GetVar("Eigen2");
antwoordenVragenlijst[45] = player.GetVar("Eigen3");
antwoordenVragenlijst[46] = player.GetVar("Eigen4");
antwoordenVragenlijst[47] = player.GetVar("OverigeOpmerkingen");

////// EXECUTE ALL THE FUNCTIONS
writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
	contents = "<!DOCTYPE html><html><head><title>Keuzehulpmiddel Borstkanker Nazorg</title></head><body style='font-family: Arial, Helvetica, sans-serif;'>";
	contents += createTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createImageTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createQuestionTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createSippTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += printDate();
	contents += "</body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function displayKeuze(inputkeuze, keuzeSource, vergelijkingkeuze) {
	var output;
	switch(inputkeuze){
		case "ZORGVERLENER" :
			output = colorImages(keuzeSource[0], vragen[0], vergelijkingkeuze[0]);
			return output;
		case "FREQUENTIE" :
			output = colorImages(keuzeSource[1], vragen[1], vergelijkingkeuze[1]);
			return output;	
		case "GEZINSLEDEN" :
			output = colorImages(keuzeSource[2], vragen[2], vergelijkingkeuze[2]);
			return output;	
		case "INPLANNEN" :
			output = colorImages(keuzeSource[3], vragen[3], vergelijkingkeuze[3]);
			return output;
		case "KOSTEN" :
			output = colorImages(keuzeSource[4], vragen[4], vergelijkingkeuze[4]);
			return output;	
		case "LICHAMELIJK ONDERZOEK" :
			output = colorImages(keuzeSource[5], vragen[5], vergelijkingkeuze[5]);
			return output;
		case "LOCATIE" :
			output = colorImages(keuzeSource[6], vragen[6], vergelijkingkeuze[6]);
			return output;
		case "START NAZORG" :
			output = colorImages(keuzeSource[7], vragen[7], vergelijkingkeuze[7]);
			return output;
		case "VORM NAZORG" :
			output = colorImages(keuzeSource[8], vragen[8], vergelijkingkeuze[8]);
			return output;	
		case "HOEVEELHEID TIJD" :
			output = colorImages(keuzeSource[9], vragen[9], vergelijkingkeuze[9]);
			return output;	
		default : 
			alert("Er gaat iets fout bij:" + inputkeuze);
			break;
	}
}

function headerImages(imageBase, optionValue) {
	var imageOutput = "<img src='printimages/";		
	if (optionValue > 0) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function colorImages (imageBase, vraagInput, vraagAntwoord){
	var imageOutput = "<img src='printimages/";		
	if (vraagInput === vraagAntwoord) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function createTable() {
	var tableOutput = "";
	tableOutput += "<table><tr><td><img src='printimages/t1_t1.jpg'></td>";
	tableOutput += "<td>"+ headerImages("t1_t2", options[0])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t3", options[1])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t4", options[2])+"</td>";
		for (i = 0; i < keuzes.length; i++){
			tableOutput += "<tr>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenKeuzeImage, 0)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenVasteAfspraken, antwoordenVasteAfspraken)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenTelefonisch, antwoordenTelefonisch)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenOpAanvraag, antwoordenOpAanvraag)+"</td>";
			tableOutput += "</tr>";
		}
	tableOutput += "</table>";
	return tableOutput;
}

function printDate(){
	var d = new Date();
	var theDate = "Geprint op: ";
	theDate += d.getDate();
	theDate += " - ";
	theDate += d.getMonth() + 1;
	theDate += " - ";
	theDate += d.getFullYear();
	return theDate;
}

function createImageTable() {
	var content = "<table><tr><td>";
	content += "<table><tr><td><div style='position:relative;'>";
	content += "<img src='printimages/icon1.jpg'><h2 style='position: absolute; top:100px; padding: 50px; font-family: sans-serif;'>" + gezondheid + " / " + setOutputNumber() + " </h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon2.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + activiteiten + " / 6</h2>";
	content += "</div></td></tr><tr><td><div style='position:relative;''>";
	content += "<img  src='printimages/icon3.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + omgeving + " / 10</h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon4.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + eigenmanier + " / 4</h2>";
	content += "</div></td></tr></table>";
	content += "</td><td valign='top'>";
	content += "1. Bij de 'Lastmeter' gaf u een score van "+ lastmeter +" aan. <br>";
	content += "2. In de lijst ‘Gezondheid’ beantwoordde u " + gezondheid + " van de "+setOutputNumber()+" vragen met JA of SOMS. <br>";
	content += "3. In de lijst ‘Activiteiten’ beantwoordde u " + activiteiten + " van de 6 vragen met JA of SOMS. <br>"; 
	content += "4. In de lijst ‘Omgeving’ beantwoordde u " + omgeving + " van de 10 vragen met JA of SOMS. <br>";
	content += "5. In de lijst ‘Eigen manier’ beantwoordde u " + eigenmanier + " van de 4 vragen met JA of SOMS. <br>";
	content += "<br><br>Opmerkingen:<br><br>" + opmerkingen;
	content += "</td></tr></table>";
	return content;
}

function setOutputNumber(){
	var output;
	for (i = 0; i < treatments.length; i++){
			if(treatments[i] === true) {
				var number = i + 1;
				switch(number){
					case 1 : 
						output = 36;
						return output;
					case 2 : 
						output = 36;
						return output;
					case 3 : 
						output = 36;
						return output;
					case 4 : 
						output = 25;
						return output;
					case 5 : 
						output = 23;
						return output;
				}
			}
	}
}

function createSippTable() {
	var content ="";
	content += "";
	content += "<h1>OVERZICHT ZORGVERLENER</h1>";
	content += "<p>Informatie voor de SIPP score</p>";
	content += "A. Blok 1 Beantwoorde vragen met JA  - "+ sipp[0] +"<br> B. Blok 2 Beantwoorde vragen met JA - " + sipp[1] + "<br>";
	content += "C. Blok 3 Beantwoorde vragen met JA  - "+ sipp[2] +"<br> D. Blok 4 Beantwoorde vragen met JA - " + sipp[3] + "<br>";
	content += "De vraag zou u graag met een hulpverlener willen praten werd beantwoord met - "+ controleVragen[0] + "<br>";
	content += "de vraag wenst u voor dit probleem begeleiding door een hulpverlener werd beantwoord met - "+ controleVragen[1];
	content += "<p>Indicatie voor doorverwijzing</p>";
	content += "A. "+ sippInfo[0] +"<br>B. "+sippInfo[1]+"<br>C. "+sippInfo[2]+"<br>D. "+sippInfo[3];
	content += "<p>De Lastmeter</p>";
	content += "Op een Lastmeter met een schaal van 0 tot 10 (geen tot veel last) scoort u een -  "+ lastmeter +"<br>Let op! " + sippAlert;
	return content;
}

function createQuestionTable() {
	var content ="";
	content += "<h1>UW VRAGENLIJST</h1>";
	content += "<p>1. De Lastmeter op een schaal van 0 tot 10 (geen tot veel last)</p>";
	content += "Op een schaal van 0 tot 10 scoort u een -  " + lastmeter;
	content += "<p>2. Mijn gezondheid</p>";
	content += "Op de vraag hoe u zich op dit moment voelt antwoordde u met -  " + antwoordenVragenlijst[0];
	content += "<p>Lichamelijk</p>";
	content += "1. Moeheidsklachten  -  "+ antwoordenVragenlijst[1] +"<br>2. Slaapproblemen  -  "+ antwoordenVragenlijst[2] +"<br>3. Gewichtsverlies  -  "+ antwoordenVragenlijst[3];
	content += "<br>4. Slechte eetlust  -  " + antwoordenVragenlijst[4] +"<br>5. Duizeligheid  -  "+ antwoordenVragenlijst[5]+"<br>6. Pijnklachten  -  "+antwoordenVragenlijst[6];
	content += "<br>7. Conditieverlies  -  "+ antwoordenVragenlijst[7] +"<br>8. Verminderde spierkracht  -  "+ antwoordenVragenlijst[8] +"<br>9. Problemen met uiterlijk  -  "+antwoordenVragenlijst[9];
	content += "<br>10. Oedeem arm  -  "+ antwoordenVragenlijst[10] +"<br>11. Functieverlies arm  -  "+antwoordenVragenlijst[11];
	content += "<p>Emotioneel</p>";
	content += "1. Piekeren  -  "+ antwoordenVragenlijst[12] +"<br>2. Rusteloosheid  -  "+ antwoordenVragenlijst[13] +"<br>3. Gevoelens van eenzaamheid  -  "+ antwoordenVragenlijst[14] ;
	content += "<br>4. Gevoelens van verdriet  -  " + antwoordenVragenlijst[15] +"<br>5. Gevoelens van verlies  -  "+ antwoordenVragenlijst[16] +"<br>6. Minder grip op eigen emoties  -  "+ antwoordenVragenlijst[17] ;
	content += "<br>7. Verminderd zelfvertrouwen  -  " + antwoordenVragenlijst[18] +"<br>8. Angst voor ziekte - behandeling  -  "+ antwoordenVragenlijst[19] +"<br>9. Gevoelens van neerslachtigheid  -  "+ antwoordenVragenlijst[20] ;
	content += "<br>10. Gevoelens van wanhoop  -  " + antwoordenVragenlijst[21];
	content += "<p>Cognitief</p>";
	content += "1. Problemen met herinneren van dingen  -  " + antwoordenVragenlijst[22] + "<br>2. Concentratie problemen  -  " + antwoordenVragenlijst[23];
	content += "<p>3. Mijn activiteiten</p>";
	content += "Op de vraag welke voor u belangrijke activiteiten gaan er minder goed antwoordde u met -  "+ antwoordenVragenlijst[24];
	content += "<p>Praktisch</p>";
	content += "1. Beperkingen in dagelijks functioneren  -  "+antwoordenVragenlijst[25]+"<br>2. Problemen met zorg voor kinderen  -  "+antwoordenVragenlijst[26];
	content += "<br>3. Problemen met huishouden  -  "+antwoordenVragenlijst[27]+"<br>4. Problemen met vervoer  -  "+antwoordenVragenlijst[28];
	content += "<br>5. Problemen met werk - school - studie  -  "+ antwoordenVragenlijst[29]+"<br>6. Problemen met wassen - aankleden  -  "+ antwoordenVragenlijst[30];
	content += "<p>4. Mijn omgeving</p>";
	content += "Op de vraag ervaart u problemen met uw omgeving door uw ziekte en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[31];
	content += "<p>Gezin - Sociaal</p>";
	content += "1. Onvoldoende steun door de mensen in uw omgeving  -  " + antwoordenVragenlijst[32] + "<br>2. Problemen in omgang met uw familie - vrienden  -  " + antwoordenVragenlijst[33];
	content += "<br>3. Problemen in omgang met uw kinderen  -  "+ antwoordenVragenlijst[34] +"<br>4. Problemen in omgang met uw partner  -  " + antwoordenVragenlijst[35];
	content += "<br>5. Problemen met intimiteit met uw partner  -  "+ antwoordenVragenlijst[36] +"<br>6. Minder zin in vrijen  -  "+ antwoordenVragenlijst[37];
	content += "<br>7. Wenst u voor dit probleem begeleiding door een hulpverlener  -  " + antwoordenVragenlijst[38];
	content += "<p>Praktisch</p>";
	content += "1. Financiële problemen  -  "+ antwoordenVragenlijst[39] + "<br>2. Problemen met verzekering  -  " + antwoordenVragenlijst[40];
	content += "<br>3. Problemen met wonen - huisvesting  -  " + antwoordenVragenlijst[41];
	content += "<p>5. Mijn eigen manier</p>";
	content += "Op de vraag ervaart u problemen  in de manier waarop u met uw ziekte en de gevolgen ervan het omgaat en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[42];
	content += "<p>Overige vragen</p>";
	content += "1. Onvoldoende kunnen praten over het feit dat u kanker heeft  -  " + antwoordenVragenlijst[43] + "<br>2. Zou u graag met een hulpverlener willen praten  -  " + antwoordenVragenlijst[44];
	content += "<br>3. Vragen over zin van het leven - levensbeschouwing  -  " + antwoordenVragenlijst[45] + "<br>4. Veranderingen in vertrouwen in God - geloof  -  " + antwoordenVragenlijst[46];
	content += "<p>Overige opmerkingen</p>";
	content += "Op de vraag wat wilt u zelf graag met de zorgverlener bespreken tijdens het nazorggesprek? antwoordde u met -  " + antwoordenVragenlijst[47];
	return content;
}
}

function Script4()
{
  var p = GetPlayer();

var content14 = "<h1>1. Voorkeuren en opties</h1>"
var content16 = "<p>Ziekenhuis</p>"
var args13 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Ziekenhuis1")+"  -  "+p.GetVar("Veld1")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Ziekenhuis2")+"  -  "+p.GetVar("Veld2")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Ziekenhuis3")+"  -  "+p.GetVar("Veld3")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Ziekenhuis4")+"  -  "+p.GetVar("Veld4")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Ziekenhuis5")+"  -  "+p.GetVar("Veld5");
var content17 = "<p>Telefonisch</p>"
var args14 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Telefonisch1")+"  -  "+p.GetVar("Veld6")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Telefonisch2")+"  -  "+p.GetVar("Veld7")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Telefonisch3")+"  -  "+p.GetVar("Veld8")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Telefonisch4")+"  -  "+p.GetVar("Veld9")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Telefonisch5")+"  -  "+p.GetVar("Veld10");
var content18 = "<p>Op aanvraag</p>"
var args15 = p.GetVar("Keuze1")+"  -  "+p.GetVar("Aanvraag1")+"  -  "+p.GetVar("Veld11")+"<br>"+p.GetVar("Keuze2")+"  -  "+p.GetVar("Aanvraag2")+"  -  "+p.GetVar("Veld12")+"<br>"+p.GetVar("Keuze3")+"  -  "+p.GetVar("Aanvraag3")+"  -  "+p.GetVar("Veld13")+"<br>"+p.GetVar("Keuze4")+"  -  "+p.GetVar("Aanvraag4")+"  -  "+p.GetVar("Veld14")+"<br>"+p.GetVar("Keuze5")+"  -  "+p.GetVar("Aanvraag5")+"  -  "+p.GetVar("Veld15");
var content19 = "<h1>2. Samenvatting vragenlijst</h1>"
var content20 = "<p>Lastmeter en Domeinen</p>"
var args16 = "Op een Lastmeter met een schaal van 0 tot 10 (geen tot veel last) scoort u een -  "+p.GetVar("Lastmeter")+"<br>"+"Hoeveel van de 25 vragen binnen het domein Gezondheid werden met Ja of Soms beantwoord? -  "+p.GetVar("Gezondheid")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Activiteiten werden met Ja of Soms beantwoord? -  "+p.GetVar("Activiteiten")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Omgeving werden met Ja of Soms beantwoord? -  "+p.GetVar("Omgeving")+"<br>"+"Hoeveel van de 6 vragen binnen het domein Eigen manier werden met Ja of Soms beantwoord? -  "+p.GetVar("EigenManier");
var content21 = "<p>Informatie voor de hulpverlener</p>"
var args17 = "Op de vragen uit de screenings vragenlijst psychosociale problemen (SIPP) worden de volgende vier scores behaald - "+p.GetVar("Leeg")+"<br>"+"Blok 1 -  "+p.GetVar("Sipp1")+"  -  "+"Blok 2 -  "+p.GetVar("Sipp2")+"  -  "+"Blok 3 -  "+p.GetVar("Sipp3")+"  -  "+"Blok 4 -  "+p.GetVar("Sipp4")+"<br>"+"Verder werd de vraag (Zou u graag met een hulpverlener willen praten?) beantwoord met -  "+p.GetVar("CheckVraag1")+"<br>"+"En de vraag (Wenst u voor dit probleem begeleiding door een hulpverlener?) beantwoord met -  "+p.GetVar("CheckVraag2");
var content22 = "<p>Verklaring SIPP - score</p>"
var args18 = " - "+p.GetVar("SippInfo");
var content13 = "<h1>Overzicht vragenlijst</h1>"
var content = "<p>1. De Lastmeter op een schaal van 0 tot 10 (geen tot veel last)</p>"
var args = "Op een schaal van 0 tot 10 scoort u een -  "+p.GetVar("Lastmeter");
var content1 = "<p>2. Mijn gezondheid</p>"
var args1 = "Op de vraag hoe u zich op dit moment voelt antwoordde u met -  "+p.GetVar("MijnGezondheid1");
var content2 = "<p>Lichamelijk</p>"
var args2 = "1. Moeheidsklachten  -  "+p.GetVar("Lichamelijk1")+"<br>"+"2. Slaapproblemen  -  "+p.GetVar("Lichamelijk2")+"<br>"+"3. Gewichtsverlies  -  "+p.GetVar("Lichamelijk3")+"<br>"+"4. Slechte eetlust  -  "+p.GetVar("Lichamelijk4")+"<br>"+"5. Duizeligheid  -  "+p.GetVar("Lichamelijk5")+"<br>"+"6. Pijnklachten  -  "+p.GetVar("Lichamelijk6")+"<br>"+"7. Conditieverlies  -  "+p.GetVar("Lichamelijk7")+"<br>"+"8. Verminderde spierkracht  -  "+p.GetVar("Lichamelijk8")+"<br>"+"9. Problemen met uiterlijk  -  "+p.GetVar("Lichamelijk9")+"10. Droge jeukerige huid  -  "+p.GetVar("Lichamelijk18")+"<br>"+"11. Benauwdheid  -  "+p.GetVar("Lichamelijk19")+"<br>"+"12. Oedeem arm  -  "+p.GetVar("Lichamelijk23")+"<br>"+"13. Functieverlies arm  -  "+p.GetVar("Lichamelijk24");
var content3 = "<p>Emotioneel</p>"
var args3 = "1. Piekeren  -  "+p.GetVar("Emotioneel1")+"<br>"+"2. Rusteloosheid  -  "+p.GetVar("Emotioneel2")+"<br>"+"3. Gevoelens van eenzaamheid  -  "+p.GetVar("Emotioneel3")+"<br>"+"4. Gevoelens van verdriet  -  "+p.GetVar("Emotioneel4")+"<br>"+"5. Gevoelens van verlies  -  "+p.GetVar("Emotioneel5")+"<br>"+"6. Minder grip op eigen emoties  -  "+p.GetVar("Emotioneel6")+"<br>"+"7. Verminderd zelfvertrouwen  -  "+p.GetVar("Emotioneel7")+"<br>"+"8. Angst voor ziekte - behandeling  -  "+p.GetVar("Emotioneel8")+"<br>"+"9. Gevoelens van neerslachtigheid  -  "+p.GetVar("Emotioneel9")+"<br>"+"10. Gevoelens van wanhoop  -  "+p.GetVar("Emotioneel10");
var content4 = "<p>Cognitief</p>"
var args4 = "1. Problemen met herinneren van dingen  -  "+p.GetVar("Cognitief1")+"<br>"+"2. Concentratie problemen  -  "+p.GetVar("Cognitief2");
var content5 = "<p>3. Mijn activiteiten</p>"
var args5 = "Op de vraag welke voor u belangrijke activiteiten gaan er minder goed antwoordde u met -  "+p.GetVar("MijnActiviteiten1");
var content6 = "<p>Praktisch</p>"
var args6 = "1. Beperkingen in dagelijks functioneren  -  "+p.GetVar("Praktisch1")+"<br>"+"2. Problemen met zorg voor kinderen  -  "+p.GetVar("Praktisch2")+"<br>"+"3. Problemen met huishouden  -  "+p.GetVar("Praktisch3")+"<br>"+"4. Problemen met vervoer  -  "+p.GetVar("Praktisch4")+"<br>"+"5. Problemen met werk - school - studie  -  "+p.GetVar("Praktisch5")+"<br>"+"6. Problemen met wassen - aankleden  -  "+p.GetVar("Praktisch6");
var content7 = "<p>4. Mijn omgeving</p>"
var args7 = "Op de vraag ervaart u problemen met uw omgeving door uw ziekte en zo ja, welke? antwoordde u met -  "+p.GetVar("MijnOmgeving1");
var content8 = "<p>Gezin - Sociaal</p>"
var args8 = "1. Onvoldoende steun door de mensen in uw omgeving  -  "+p.GetVar("Gezin1")+"<br>"+"2. Problemen in omgang met uw familie - vrienden  -  "+p.GetVar("Gezin2")+"<br>"+"3. Problemen in omgang met uw kinderen  -  "+p.GetVar("Gezin3")+"<br>"+"4. Problemen in omgang met uw partner  -  "+p.GetVar("Gezin4")+"<br>"+"5. Problemen met intimiteit met uw partner  -  "+p.GetVar("Gezin5")+"<br>"+"6. Minder zin in vrijen  -  "+p.GetVar("Gezin6")+"<br>"+"7. Wenst u voor dit probleem begeleiding door een hulpverlener  -  "+p.GetVar("Gezin7");
var content9 = "<p>Praktisch</p>"
var args9 = "1. Financiële problemen  -  "+p.GetVar("Gezin8")+"<br>"+"2. Problemen met verzekering  -  "+p.GetVar("Gezin9")+"<br>"+"3. Problemen met wonen - huisvesting  -  "+p.GetVar("Gezin10");
var content10 = "<p>5. Mijn eigen manier</p>"
var args10 = "Op de vraag ervaart u problemen  in de manier waarop u met uw ziekte en de gevolgen ervan het omgaat en zo ja, welke? antwoordde u met -  "+p.GetVar("EigenManier1");
var content11 = "<p>Overige vragen</p>"
var args11 = "1. Onvoldoende kunnen praten over het feit dat u kanker heeft  -  "+p.GetVar("Eigen1")+"<br>"+"2. Zou u graag met een hulpverlener willen praten  -  "+p.GetVar("Eigen2")+"<br>"+"3. Vragen over zin van het leven - levensbeschouwing  -  "+p.GetVar("Eigen3")+"<br>"+"4. Veranderingen in vertrouwen in God - geloof  -  "+p.GetVar("Eigen4");
var content12 = "<p>Overige opmerkingen</p>"
var args12 = "Op de vraag wat wilt u zelf graag met de zorgverlener bespreken tijdens het nazorggesprek? antwoordde u met -  "+p.GetVar("OverigeOpmerkingen");

var url = "print.html?="+content14+content16+args13+content17+args14+content18+args15+content19+content20+args16+content21+args17+content22+args18+content13+content+args+content1+args1+content2+args2+content3+args3+content4+args4+content5+args5+content6+args6+content7+args7+content8+args8+content9+args9+content10+args10+content11+args11+content12+args12;

window.open(url,"_blank");
}

function Script5()
{
  //////////////////////////////////////////////////
//// -  -  -  PRINTING RESULT SLIDE  -  -  -  ////
////   BREAST AFTERCARE PATIENT DECISION AID  ////
//// -  -  -  -  MAASTRO CLINIC   -  -  -  -  ////
//////////////////////////////////////////////////

var myWindow = window.open("","Print","width=500,height=800,scrollbars=1,resizable=1");
var player = GetPlayer();

//// DECLARE ALL THE VARIABLES
var contents;
var i;

var lastmeter = player.GetVar("Lastmeter");
var gezondheid = player.GetVar("Gezondheid");
var activiteiten = player.GetVar("Activiteiten");
var omgeving = player.GetVar("Omgeving");
var eigenmanier = player.GetVar("EigenManier");
var opmerkingen = player.GetVar("OverigeOpmerkingen");

var treatments = [];
treatments[0] = player.GetVar("Chemotherapie");
treatments[1] = player.GetVar("Hormoontherapie");
treatments[2] = player.GetVar("Immunotherapie");
treatments[3] = player.GetVar("Bestraling");
treatments[4] = player.GetVar("Operatie");

var sipp = [];
sipp[0] = player.GetVar("Sipp1");
sipp[1] = player.GetVar("Sipp2");
sipp[2] = player.GetVar("Sipp3");
sipp[3] = player.GetVar("Sipp4");

var sippInfo = [];
sippInfo[0] = player.GetVar("SippInfo1");
sippInfo[1] = player.GetVar("SippInfo2");
sippInfo[2] = player.GetVar("SippInfo3");
sippInfo[3] = player.GetVar("SippInfo4");

var controleVragen = [];
controleVragen [0] = player.GetVar("CheckVraag1");
controleVragen [1] = player.GetVar("CheckVraag2");

var sippAlert = player.GetVar("SippAlert");

var options = [];
options[0] = player.GetVar("Ziekenhuis");
options[1] = player.GetVar("Telefoon");
options[2] = player.GetVar("Aanvraag");

var keuzes = [];
keuzes[0] = player.GetVar("Keuze1");
keuzes[1] = player.GetVar("Keuze2");
keuzes[2] = player.GetVar("Keuze3");
keuzes[3] = player.GetVar("Keuze4");
keuzes[4] = player.GetVar("Keuze5");

var vragen = [];
vragen[0] = player.GetVar("Vraag3");
vragen[1] = player.GetVar("Vraag7");
vragen[2] = player.GetVar("Vraag9");
vragen[3] = player.GetVar("Vraag2");
vragen[4] = player.GetVar("Vraag10");
vragen[5] = player.GetVar("Vraag4");
vragen[6] = player.GetVar("Vraag1");
vragen[7] = player.GetVar("Vraag5");
vragen[8] = player.GetVar("Vraag8");
vragen[9] = player.GetVar("Vraag6");

var antwoordenVasteAfspraken = [];
antwoordenVasteAfspraken[0] = 2;
antwoordenVasteAfspraken[1] = 1;
antwoordenVasteAfspraken[2] = 1;
antwoordenVasteAfspraken[3] = 1;
antwoordenVasteAfspraken[4] = 9;
antwoordenVasteAfspraken[5] = 1;
antwoordenVasteAfspraken[6] = 2;
antwoordenVasteAfspraken[7] = 1;
antwoordenVasteAfspraken[8] = 1;
antwoordenVasteAfspraken[9] = 2;

var antwoordenTelefonisch = [];
antwoordenTelefonisch[0] = 2;
antwoordenTelefonisch[1] = 1;
antwoordenTelefonisch[2] = 2;
antwoordenTelefonisch[3] = 1;
antwoordenTelefonisch[4] = 9;
antwoordenTelefonisch[5] = 2;
antwoordenTelefonisch[6] = 1;
antwoordenTelefonisch[7] = 1;
antwoordenTelefonisch[8] = 1;
antwoordenTelefonisch[9] = 1;

var antwoordenOpAanvraag = [];
antwoordenOpAanvraag[0] = 2;
antwoordenOpAanvraag[1] = 2;
antwoordenOpAanvraag[2] = 2;
antwoordenOpAanvraag[3] = 2;
antwoordenOpAanvraag[4] = 9;
antwoordenOpAanvraag[5] = 1;
antwoordenOpAanvraag[6] = 2;
antwoordenOpAanvraag[7] = 2;
antwoordenOpAanvraag[8] = 1;
antwoordenOpAanvraag[9] = 1;

var voorkeurenKeuzeImage = [];
voorkeurenKeuzeImage[0] = "keuze_zorgverlener";
voorkeurenKeuzeImage[1] = "keuze_frequentie";
voorkeurenKeuzeImage[2] = "keuze_gezinsleden";
voorkeurenKeuzeImage[3] = "keuze_inplannen";
voorkeurenKeuzeImage[4] = "keuze_kosten";
voorkeurenKeuzeImage[5] = "keuze_lichamelijkonderzoek";
voorkeurenKeuzeImage[6] = "keuze_locatie";
voorkeurenKeuzeImage[7] = "keuze_startnazorg";
voorkeurenKeuzeImage[8] = "keuze_vormnazorg";
voorkeurenKeuzeImage[9] = "keuze_hoeveelheidtijd";

var voorkeurenVasteAfspraken = [];
voorkeurenVasteAfspraken[0] = "00_verpleegkundige";
voorkeurenVasteAfspraken[1] = "01_bepaleninoverleg";
voorkeurenVasteAfspraken[2] = "02a_gesprekken";
voorkeurenVasteAfspraken[3] = "03a_vasteafspraken";
voorkeurenVasteAfspraken[4] = "04_verzekering";
voorkeurenVasteAfspraken[5] = "05a_verzoek";
voorkeurenVasteAfspraken[6] = "06a_ziekenhuis";
voorkeurenVasteAfspraken[7] = "07a_bepalen";
voorkeurenVasteAfspraken[8] = "08_individueel";
voorkeurenVasteAfspraken[9] = "09a_duur";

var voorkeurenTelefonisch = [];
voorkeurenTelefonisch[0] = "00_verpleegkundige";
voorkeurenTelefonisch[1] = "01_bepaleninoverleg";
voorkeurenTelefonisch[2] = "02b_gesprekken";
voorkeurenTelefonisch[3] = "03a_vasteafspraken";
voorkeurenTelefonisch[4] = "04_verzekering";
voorkeurenTelefonisch[5] = "05b_verzoek";
voorkeurenTelefonisch[6] = "06b_ziekenhuis";
voorkeurenTelefonisch[7] = "07a_bepalen";
voorkeurenTelefonisch[8] = "08_individueel";
voorkeurenTelefonisch[9] = "09b_duur";

var voorkeurenOpAanvraag = [];
voorkeurenOpAanvraag[0] = "00_verpleegkundige";
voorkeurenOpAanvraag[1] = "01_bepaleninoverleg";
voorkeurenOpAanvraag[2] = "02a_gesprekken";
voorkeurenOpAanvraag[3] = "03b_vasteafspraken";
voorkeurenOpAanvraag[4] = "04_verzekering";
voorkeurenOpAanvraag[5] = "05a_verzoek";
voorkeurenOpAanvraag[6] = "06a_ziekenhuis";
voorkeurenOpAanvraag[7] = "07b_bepalen";
voorkeurenOpAanvraag[8] = "08_individueel";
voorkeurenOpAanvraag[9] = "09a_duur";

var antwoordenVragenlijst = [];
antwoordenVragenlijst[0] = player.GetVar("MijnGezondheid1");
antwoordenVragenlijst[1] = player.GetVar("Lichamelijk1");
antwoordenVragenlijst[2] = player.GetVar("Lichamelijk2");
antwoordenVragenlijst[3] = player.GetVar("Lichamelijk3");
antwoordenVragenlijst[4] = player.GetVar("Lichamelijk4");
antwoordenVragenlijst[5] = player.GetVar("Lichamelijk5");
antwoordenVragenlijst[6] = player.GetVar("Lichamelijk6");
antwoordenVragenlijst[7] = player.GetVar("Lichamelijk7");
antwoordenVragenlijst[8] = player.GetVar("Lichamelijk8");
antwoordenVragenlijst[9] = player.GetVar("Lichamelijk9");
antwoordenVragenlijst[10] = player.GetVar("Lichamelijk23");
antwoordenVragenlijst[11] = player.GetVar("Lichamelijk24");
antwoordenVragenlijst[12] = player.GetVar("Emotioneel1");
antwoordenVragenlijst[13] = player.GetVar("Emotioneel2");
antwoordenVragenlijst[14] = player.GetVar("Emotioneel3");
antwoordenVragenlijst[15] = player.GetVar("Emotioneel4");
antwoordenVragenlijst[16] = player.GetVar("Emotioneel5");
antwoordenVragenlijst[17] = player.GetVar("Emotioneel6");
antwoordenVragenlijst[18] = player.GetVar("Emotioneel7");
antwoordenVragenlijst[19] = player.GetVar("Emotioneel8");
antwoordenVragenlijst[20] = player.GetVar("Emotioneel9");
antwoordenVragenlijst[21] = player.GetVar("Emotioneel10");
antwoordenVragenlijst[22] = player.GetVar("Cognitief1");
antwoordenVragenlijst[23] = player.GetVar("Cognitief2");
antwoordenVragenlijst[24] = player.GetVar("MijnActiviteiten1");
antwoordenVragenlijst[25] = player.GetVar("Praktisch1");
antwoordenVragenlijst[26] = player.GetVar("Praktisch2");
antwoordenVragenlijst[27] = player.GetVar("Praktisch3");
antwoordenVragenlijst[28] = player.GetVar("Praktisch4");
antwoordenVragenlijst[29] = player.GetVar("Praktisch5");
antwoordenVragenlijst[30] = player.GetVar("Praktisch6");
antwoordenVragenlijst[31] = player.GetVar("MijnOmgeving1");
antwoordenVragenlijst[32] = player.GetVar("Gezin1");
antwoordenVragenlijst[33] = player.GetVar("Gezin2");
antwoordenVragenlijst[34] = player.GetVar("Gezin3");
antwoordenVragenlijst[35] = player.GetVar("Gezin4");
antwoordenVragenlijst[36] = player.GetVar("Gezin5");
antwoordenVragenlijst[37] = player.GetVar("Gezin6");
antwoordenVragenlijst[38] = player.GetVar("Gezin7");
antwoordenVragenlijst[39] = player.GetVar("Gezin8");
antwoordenVragenlijst[40] = player.GetVar("Gezin9");
antwoordenVragenlijst[41] = player.GetVar("Gezin10");
antwoordenVragenlijst[42] = player.GetVar("EigenManier1");
antwoordenVragenlijst[43] = player.GetVar("Eigen1");
antwoordenVragenlijst[44] = player.GetVar("Eigen2");
antwoordenVragenlijst[45] = player.GetVar("Eigen3");
antwoordenVragenlijst[46] = player.GetVar("Eigen4");
antwoordenVragenlijst[47] = player.GetVar("OverigeOpmerkingen");

////// EXECUTE ALL THE FUNCTIONS
writePage();

///// DECLARE ALL THE FUNCTIONS
function writePage() {
	contents = "<!DOCTYPE html><html><head><title>Keuzehulpmiddel Borstkanker Nazorg</title></head><body style='font-family: Arial, Helvetica, sans-serif;'>";
	contents += createTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createImageTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createQuestionTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += createSippTable();
	contents += "<BR><BR><BR><BR><BR>";
	contents += printDate();
	contents += "</body></html>";
	myWindow.document.write(contents);
	myWindow.print();
}

function displayKeuze(inputkeuze, keuzeSource, vergelijkingkeuze) {
	var output;
	switch(inputkeuze){
		case "ZORGVERLENER" :
			output = colorImages(keuzeSource[0], vragen[0], vergelijkingkeuze[0]);
			return output;
		case "FREQUENTIE" :
			output = colorImages(keuzeSource[1], vragen[1], vergelijkingkeuze[1]);
			return output;	
		case "GEZINSLEDEN" :
			output = colorImages(keuzeSource[2], vragen[2], vergelijkingkeuze[2]);
			return output;	
		case "INPLANNEN" :
			output = colorImages(keuzeSource[3], vragen[3], vergelijkingkeuze[3]);
			return output;
		case "KOSTEN" :
			output = colorImages(keuzeSource[4], vragen[4], vergelijkingkeuze[4]);
			return output;	
		case "LICHAMELIJK ONDERZOEK" :
			output = colorImages(keuzeSource[5], vragen[5], vergelijkingkeuze[5]);
			return output;
		case "LOCATIE" :
			output = colorImages(keuzeSource[6], vragen[6], vergelijkingkeuze[6]);
			return output;
		case "START NAZORG" :
			output = colorImages(keuzeSource[7], vragen[7], vergelijkingkeuze[7]);
			return output;
		case "VORM NAZORG" :
			output = colorImages(keuzeSource[8], vragen[8], vergelijkingkeuze[8]);
			return output;	
		case "HOEVEELHEID TIJD" :
			output = colorImages(keuzeSource[9], vragen[9], vergelijkingkeuze[9]);
			return output;	
		default : 
			alert("Er gaat iets fout bij:" + inputkeuze);
			break;
	}
}

function headerImages(imageBase, optionValue) {
	var imageOutput = "<img src='printimages/";		
	if (optionValue > 0) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function colorImages (imageBase, vraagInput, vraagAntwoord){
	var imageOutput = "<img src='printimages/";		
	if (vraagInput === vraagAntwoord) {
		imageOutput += imageBase + "_g.jpg'>";
		return imageOutput;
	} else {
		imageOutput += imageBase + ".jpg'>";
		return imageOutput;
	}
}

function createTable() {
	var tableOutput = "";
	tableOutput += "<table><tr><td><img src='printimages/t1_t1.jpg'></td>";
	tableOutput += "<td>"+ headerImages("t1_t2", options[0])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t3", options[1])+"</td>";
	tableOutput += "<td>"+ headerImages("t1_t4", options[2])+"</td>";
		for (i = 0; i < keuzes.length; i++){
			tableOutput += "<tr>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenKeuzeImage, 0)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenVasteAfspraken, antwoordenVasteAfspraken)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenTelefonisch, antwoordenTelefonisch)+"</td>";
			tableOutput += "<td >"+displayKeuze(keuzes[i], voorkeurenOpAanvraag, antwoordenOpAanvraag)+"</td>";
			tableOutput += "</tr>";
		}
	tableOutput += "</table>";
	return tableOutput;
}

function printDate(){
	var d = new Date();
	var theDate = "Geprint op: ";
	theDate += d.getDate();
	theDate += " - ";
	theDate += d.getMonth() + 1;
	theDate += " - ";
	theDate += d.getFullYear();
	return theDate;
}

function createImageTable() {
	var content = "<table><tr><td>";
	content += "<table><tr><td><div style='position:relative;'>";
	content += "<img src='printimages/icon1.jpg'><h2 style='position: absolute; top:100px; padding: 50px; font-family: sans-serif;'>" + gezondheid + " / " + setOutputNumber() + " </h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon2.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + activiteiten + " / 6</h2>";
	content += "</div></td></tr><tr><td><div style='position:relative;''>";
	content += "<img  src='printimages/icon3.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + omgeving + " / 10</h2>";
	content += "</div></td><td><div style='position:relative;'>";
	content += "<img src='printimages/icon4.jpg'><h2 style='position: absolute; top:100px; padding: 50px;  font-family: sans-serif;'>" + eigenmanier + " / 4</h2>";
	content += "</div></td></tr></table>";
	content += "</td><td valign='top'>";
	content += "1. Bij de 'Lastmeter' gaf u een score van "+ lastmeter +" aan. <br>";
	content += "2. In de lijst ‘Gezondheid’ beantwoordde u " + gezondheid + " van de "+setOutputNumber()+" vragen met JA of SOMS. <br>";
	content += "3. In de lijst ‘Activiteiten’ beantwoordde u " + activiteiten + " van de 6 vragen met JA of SOMS. <br>"; 
	content += "4. In de lijst ‘Omgeving’ beantwoordde u " + omgeving + " van de 10 vragen met JA of SOMS. <br>";
	content += "5. In de lijst ‘Eigen manier’ beantwoordde u " + eigenmanier + " van de 4 vragen met JA of SOMS. <br>";
	content += "<br><br>Opmerkingen:<br><br>" + opmerkingen;
	content += "</td></tr></table>";
	return content;
}

function setOutputNumber(){
	var output;
	for (i = 0; i < treatments.length; i++){
			if(treatments[i] === true) {
				var number = i + 1;
				switch(number){
					case 1 : 
						output = 36;
						return output;
					case 2 : 
						output = 36;
						return output;
					case 3 : 
						output = 36;
						return output;
					case 4 : 
						output = 25;
						return output;
					case 5 : 
						output = 23;
						return output;
				}
			}
	}
}

function createSippTable() {
	var content ="";
	content += "";
	content += "<h1>OVERZICHT ZORGVERLENER</h1>";
	content += "<p>Informatie voor de SIPP score</p>";
	content += "A. Blok 1 Beantwoorde vragen met JA  - "+ sipp[0] +"<br> B. Blok 2 Beantwoorde vragen met JA - " + sipp[1] + "<br>";
	content += "C. Blok 3 Beantwoorde vragen met JA  - "+ sipp[2] +"<br> D. Blok 4 Beantwoorde vragen met JA - " + sipp[3] + "<br>";
	content += "De vraag zou u graag met een hulpverlener willen praten werd beantwoord met - "+ controleVragen[0] + "<br>";
	content += "de vraag wenst u voor dit probleem begeleiding door een hulpverlener werd beantwoord met - "+ controleVragen[1];
	content += "<p>Indicatie voor doorverwijzing</p>";
	content += "A. "+ sippInfo[0] +"<br>B. "+sippInfo[1]+"<br>C. "+sippInfo[2]+"<br>D. "+sippInfo[3];
	content += "<p>De Lastmeter</p>";
	content += "Op een Lastmeter met een schaal van 0 tot 10 (geen tot veel last) scoort u een -  "+ lastmeter +"<br>Let op! " + sippAlert;
	return content;
}

function createQuestionTable() {
	var content ="";
	content += "<h1>UW VRAGENLIJST</h1>";
	content += "<p>1. De Lastmeter op een schaal van 0 tot 10 (geen tot veel last)</p>";
	content += "Op een schaal van 0 tot 10 scoort u een -  " + lastmeter;
	content += "<p>2. Mijn gezondheid</p>";
	content += "Op de vraag hoe u zich op dit moment voelt antwoordde u met -  " + antwoordenVragenlijst[0];
	content += "<p>Lichamelijk</p>";
	content += "1. Moeheidsklachten  -  "+ antwoordenVragenlijst[1] +"<br>2. Slaapproblemen  -  "+ antwoordenVragenlijst[2] +"<br>3. Gewichtsverlies  -  "+ antwoordenVragenlijst[3];
	content += "<br>4. Slechte eetlust  -  " + antwoordenVragenlijst[4] +"<br>5. Duizeligheid  -  "+ antwoordenVragenlijst[5]+"<br>6. Pijnklachten  -  "+antwoordenVragenlijst[6];
	content += "<br>7. Conditieverlies  -  "+ antwoordenVragenlijst[7] +"<br>8. Verminderde spierkracht  -  "+ antwoordenVragenlijst[8] +"<br>9. Problemen met uiterlijk  -  "+antwoordenVragenlijst[9];
	content += "<br>10. Oedeem arm  -  "+ antwoordenVragenlijst[10] +"<br>11. Functieverlies arm  -  "+antwoordenVragenlijst[11];
	content += "<p>Emotioneel</p>";
	content += "1. Piekeren  -  "+ antwoordenVragenlijst[12] +"<br>2. Rusteloosheid  -  "+ antwoordenVragenlijst[13] +"<br>3. Gevoelens van eenzaamheid  -  "+ antwoordenVragenlijst[14] ;
	content += "<br>4. Gevoelens van verdriet  -  " + antwoordenVragenlijst[15] +"<br>5. Gevoelens van verlies  -  "+ antwoordenVragenlijst[16] +"<br>6. Minder grip op eigen emoties  -  "+ antwoordenVragenlijst[17] ;
	content += "<br>7. Verminderd zelfvertrouwen  -  " + antwoordenVragenlijst[18] +"<br>8. Angst voor ziekte - behandeling  -  "+ antwoordenVragenlijst[19] +"<br>9. Gevoelens van neerslachtigheid  -  "+ antwoordenVragenlijst[20] ;
	content += "<br>10. Gevoelens van wanhoop  -  " + antwoordenVragenlijst[21];
	content += "<p>Cognitief</p>";
	content += "1. Problemen met herinneren van dingen  -  " + antwoordenVragenlijst[22] + "<br>2. Concentratie problemen  -  " + antwoordenVragenlijst[23];
	content += "<p>3. Mijn activiteiten</p>";
	content += "Op de vraag welke voor u belangrijke activiteiten gaan er minder goed antwoordde u met -  "+ antwoordenVragenlijst[24];
	content += "<p>Praktisch</p>";
	content += "1. Beperkingen in dagelijks functioneren  -  "+antwoordenVragenlijst[25]+"<br>2. Problemen met zorg voor kinderen  -  "+antwoordenVragenlijst[26];
	content += "<br>3. Problemen met huishouden  -  "+antwoordenVragenlijst[27]+"<br>4. Problemen met vervoer  -  "+antwoordenVragenlijst[28];
	content += "<br>5. Problemen met werk - school - studie  -  "+ antwoordenVragenlijst[29]+"<br>6. Problemen met wassen - aankleden  -  "+ antwoordenVragenlijst[30];
	content += "<p>4. Mijn omgeving</p>";
	content += "Op de vraag ervaart u problemen met uw omgeving door uw ziekte en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[31];
	content += "<p>Gezin - Sociaal</p>";
	content += "1. Onvoldoende steun door de mensen in uw omgeving  -  " + antwoordenVragenlijst[32] + "<br>2. Problemen in omgang met uw familie - vrienden  -  " + antwoordenVragenlijst[33];
	content += "<br>3. Problemen in omgang met uw kinderen  -  "+ antwoordenVragenlijst[34] +"<br>4. Problemen in omgang met uw partner  -  " + antwoordenVragenlijst[35];
	content += "<br>5. Problemen met intimiteit met uw partner  -  "+ antwoordenVragenlijst[36] +"<br>6. Minder zin in vrijen  -  "+ antwoordenVragenlijst[37];
	content += "<br>7. Wenst u voor dit probleem begeleiding door een hulpverlener  -  " + antwoordenVragenlijst[38];
	content += "<p>Praktisch</p>";
	content += "1. Financiële problemen  -  "+ antwoordenVragenlijst[39] + "<br>2. Problemen met verzekering  -  " + antwoordenVragenlijst[40];
	content += "<br>3. Problemen met wonen - huisvesting  -  " + antwoordenVragenlijst[41];
	content += "<p>5. Mijn eigen manier</p>";
	content += "Op de vraag ervaart u problemen  in de manier waarop u met uw ziekte en de gevolgen ervan het omgaat en zo ja, welke? antwoordde u met -  " + antwoordenVragenlijst[42];
	content += "<p>Overige vragen</p>";
	content += "1. Onvoldoende kunnen praten over het feit dat u kanker heeft  -  " + antwoordenVragenlijst[43] + "<br>2. Zou u graag met een hulpverlener willen praten  -  " + antwoordenVragenlijst[44];
	content += "<br>3. Vragen over zin van het leven - levensbeschouwing  -  " + antwoordenVragenlijst[45] + "<br>4. Veranderingen in vertrouwen in God - geloof  -  " + antwoordenVragenlijst[46];
	content += "<p>Overige opmerkingen</p>";
	content += "Op de vraag wat wilt u zelf graag met de zorgverlener bespreken tijdens het nazorggesprek? antwoordde u met -  " + antwoordenVragenlijst[47];
	return content;
}
}

