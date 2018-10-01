function getNewLoginCode() {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var userAccount = JSON.parse(this.responseText);
            var alertElement = document.getElementById("new-login-code-alert");
            alertElement.innerHTML = "Nieuwe login code: " + userAccount.loginCode;
        }
    };
    httpRequest.open("POST", "/api/account");
    httpRequest.send();
};
