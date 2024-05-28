function vadition() {
    var name = document.getElementById("name1").value;
    var valid = true;
    if (name == "") {
        document.getElementById("namemsg").innerHTML = "<br> Enter the name";
        valid = false;
    } else {
        document.getElementById("namemsg").innerHTML = "";
    }
    var mobile = document.getElementById("mobile").value
    if (mobile == "") {
        document.getElementById("mobilemsg").innerHTML = "<br> Please enter your phone";
        valid = false;
    } else {
        let mobilePattern = /^[0-9]{10}$/;
        if (!mobile.match(mobilePattern)) {
            document.getElementById("mobilemsg").innerHTML = "<br> Please enter a valid 10-digit Mobile number";
            valid = false;
        } else {
            document.getElementById("mobilemsg").innerHTML = "";
        }
    }
    var email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("emailmsg").innerHTML = "<br> Enter the email";
        valid = false;
    } else {
        document.getElementById("emailmsg").innerHTML = "";
    }
    var  CompanyName = document.getElementById("CompanyName").value;
    if (CompanyName == "") {
        document.getElementById("Companynamemsg").innerHTML = "<br> Enter the CompanyName";
        valid = false;
    } else {
        document.getElementById("Companynamemsg").innerHTML = "";
    }
    var  Jobtitle = document.getElementById("Jobtitle").value;
    if (Jobtitle == "") {
        document.getElementById("Jobtitlemsg").innerHTML = "<br> Enter the Jobtitle";
        valid = false;
    } else {
        document.getElementById("Jobtitlemsg").innerHTML = "";
    }
    return valid;
    
}