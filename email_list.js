"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = false;

    // validate the entries
    if (emailAddress1 == "") {
        $("email_address1").nextElementSibling.firstChild.nodeValue 
             = "First email address entry required";
        errorMessage = true;
    }else{
        $("email_address1").nextElementSibling.firstChild.nodeValue = "";
    } 
    if (emailAddress2 == "") {
        $("email_address2").nextElementSibling.firstChild.nodeValue 
               =  "Second email address entry required";
                 errorMessage = true;
    }else if (emailAddress2 != emailAddress1) {    
        $("email_address2").nextElementSibling.firstChild.nodeValue 
             = "Email address entries must match";
    } else{
        $("email_address2").nextElementSibling.firstChild.nodeValue = "";
    }
    
    if (firstName == "") {
        $("first_name").nextElementSibling.firstChild.nodeValue
                 = "First name entry required";
                 errorMessage = true;
    }else{
        $("first_name").nextElementSibling.firstChild.nodeValue = "";
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
    if (!errorMessage) {
        $("email_form").submit(); 
    } 
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
