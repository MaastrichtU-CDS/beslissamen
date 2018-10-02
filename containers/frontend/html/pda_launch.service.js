var params = new URLSearchParams(location.search);
var pda = params.get("pda");

var cookiesAccepted = localStorage.getItem("cookiesAccepted_" + pda);; 

$(document).ready(function() {
    if (cookiesAccepted) {
        loadPda();
    } else {
        loadCookiesModal();
    }
});

function load() {
    localStorage.setItem("cookiesAccepted_" + pda, true);
    loadPda();
}

function exit() {
    window.location.href = "index.html";
}

function loadPda() {
    var iframe = document.getElementById("pda_iframe");
    iframe.style.display = "block";
    iframe.src = pda;
}

function loadCookiesModal() {
    $('#cookiesModal').modal({backdrop: 'static', keyboard: false}, 'show');  
}
