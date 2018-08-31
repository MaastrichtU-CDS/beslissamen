var loginCode = sessionStorage.getItem("loginCode");; 
var isLoggedOn = sessionStorage.getItem("isLoggedOn");
var session;

var beslisSamenBackend = "http://localhost:8081";

$(document).ready(function() {
    if (isLoggedOn && loginCode) {
        loadPdaTool();
    } else {
        loadLoginModal();
    }
});

function validateLogin() {
    
    loginCode = document.forms["loginForm"]["loginCode"].value;
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var isValidLogin = (this.response == "true");
            if (isValidLogin) {
                sessionStorage.setItem("loginCode", loginCode);
                sessionStorage.setItem("isLoggedOn", true);
                closeLoginModal();
                loadPdaTool();
            } else {
                showInvalidLoginAlert();
            }
        }
    };
    httpRequest.open("GET", beslisSamenBackend + "/api/account/validate?loginCode=" + loginCode);
    httpRequest.send();
};

function loadLoginModal() {
    $('#loginModal').modal({backdrop: 'static', keyboard: false}, 'show');  
}

function closeLoginModal() {
    $('#loginModal').modal('hide');
}

function showInvalidLoginAlert() {
    var alertElement = document.getElementById("login-alert");
    alertElement.style.color = "red";
    alertElement.innerHTML = "Inlogcode is ongeldig. Probeer opnieuw of neem contact op met uw behandelend arts.";
}

function loadPdaTool() {
    var pda = document.getElementById("pda_iframe");
    pda.style.display = "block";
    pda.src = "./../../../tools/pda_borstradiotherapie_nl/story_html5.html";
    pda.onload=startSession;
}

function startSession() {
    createSession(loginCode);
    var pda = document.getElementById("pda_iframe");
    pda.contentWindow.addEventListener("click", function() {
        sendHeartbeat(session);
    });
    pda.contentWindow.addEventListener("keydown", function() {
        sendHeartbeat(session);
    });
    document.addEventListener("visibilitychange", function() {
        if (document.hidden) {
            pauseSession(session);
        } else {
            continueSession(session);
        }
    });
    window.onbeforeunload = function(e){
        stopSession(session);
    }
}

function createSession(loginCode) {
    var sessionDto = new Object();
    sessionDto.loginCode = loginCode;
    sessionDto.decisionAid = "PDA_BorstRadiotherapie";
    
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
            session = JSON.parse(this.responseText);
        }
    };
    httpRequest.open("POST", beslisSamenBackend + "/api/session");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(sessionDto));
}

function sendHeartbeat(session) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", beslisSamenBackend + "/api/session/" + session.id + "/heartbeat");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send();
}

function pauseSession(session) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", beslisSamenBackend + "/api/session/" + session.id + "/pause");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send();
}

function continueSession(session) {
     var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", beslisSamenBackend + "/api/session/" + session.id + "/continue");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send();
}

function stopSession(session) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.open("PUT", beslisSamenBackend + "/api/session/" + session.id + "/stop");
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send();
}
