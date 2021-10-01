function anywayClick(){
    document.getElementById("divNewContact").style.display = "none";
    document.getElementById("divDetail").style.display = "none";
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}
function highlightRow(x) {
    x.style.backgroundColor = '#e6e6d5';
    x.style.cursor = "pointer";
}
function removeHighlightRow(x) {
    x.style.backgroundColor = "";
    x.style.cursor = "auto";
}
function newContactInGeneralView() {
    isMobileView = false;
    document.getElementById("divDetail").style.display = "none";
    document.getElementById("divNewContact").style.display = "block";
}
function newContactInMobileView(){
    isMobileView = true;
    document.getElementById("mobile-view").style.display="none";
    document.getElementById("divNewContact").style.display="block";
    document.getElementsByClassName("detail")[0].setAttribute("id", "detail-mobileView");
}
function saveContact() {
    console.log(jq);
    let newContact = {
        "firstName": document.getElementById('txtFirstName').value,
        "lastName": document.getElementById('txtLastName').value,
        "email": document.getElementById('txtEmail').value,
        "phoneNumber": document.getElementById('txtMobile').value,
        "address": document.getElementById('txtAddress').value,
        "company": document.getElementById('txtCompany').value,
        "avatar": document.getElementById('txtAvatar').value,
        "designation": document.getElementById('txtDesignation').value,
        "department": document.getElementById('txtDepartment').value,
    }

    let validateMessage = validateData(newContact);
    if (validateMessage === '') {
        contactData.unshift(newContact);
        bindDataToContactList();
    } else {
        alert(validateMessage);
    }
    clearData();

}
function validateEmail(str) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(str)) {
        return "Please enter a valid email address \n";
    }
    else return '';
}
function validateMobile(str) {
    var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (!re.test(str)) {
        return "Please enter a valid phone number \n";
    } else {
        return '';
    }
}
function validateFirstName(str) {
    if (str.trim() == "") {
        return "Please enter Your First Name \n";
    } else {
        return '';
    }
}
function validateLastName(str) {
    if (str.trim() == "") {
        return "Please enter Your Last Name \n";
    } else {
        return '';
    }
}
function validateCompany(str) {
    if (str.trim() == "") {
        return "Please enter company name \n";
    } else {
        return '';
    }
}
function validateAvatar(str) {
    var re=/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
    if (!re.test(str)) {
        return "Please enter valid avatar \n";
    } else {
        return '';
    }
}
function validateData(data) {
    let validateMessage = '';
    validateMessage += validateFirstName(data.firstName);
    validateMessage += validateLastName(data.lastName);
    validateMessage += validateEmail(data.email);
    validateMessage += validateMobile(data.phoneNumber);
    validateMessage += validateCompany(data.company);
    validateMessage += validateAvatar(data.avatar);
    return validateMessage.trim();
}
function searchContact(){
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}