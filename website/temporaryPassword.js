// document.getElementById("toegangscode_larynx").addEventListener('change', myPasswordFunction("larynx"));
// document.getElementById("toegangscode_prostaat").addEventListener('change', myPasswordFunction("prostaat"));
// document.getElementById("toegangscode_long").addEventListener('change', myPasswordFunction("long"));

document.getElementById("toegangscode_prostaat").addEventListener("change", function() { myPasswordFunction(); });

var url = "www.nos.nl";
var url_larynx = "https://s3.amazonaws.com/files.haikulearning.com/data/myhaikuclass/Maa/MaastroClinic/minisite_105567583/ddf517d30b95/Treatment%20choice%20tool%20Laryngeal%20cancer%20-%20Storyline%20output/index.html";
var url_prostaat = "www.google.nl";
var url_long = "www.nu.nl";
var systemPassword = "wachtwoord";

function myPasswordFunction(){
	var tempPassword = this.value;
	document.getElementById("toegangscode").value = "";

	if (systemPassword === tempPassword) {
		document.getElementById("foutmelding").style.display = "none";
		window.open(url);
	} else {
		document.getElementById("foutmelding").style.color = "red";
		document.getElementById("foutmelding").style.display = "block";
	}
}