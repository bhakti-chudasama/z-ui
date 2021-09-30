function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}
function validateEmail(str) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(str)) {
        alert("Please enter a valid email address");
        document.getElementById('txtEmail').value = '';
    }
}
function validateMobile(str) {
    var re = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if (!re.test(str)) {
        alert("Please enter a valid phone number");
        document.getElementById('txtMobile').value = '';
    }
}
function validateFirstName(str) {
    if (str.trim()!=" ") {
        alert("Please enter Your First Name");
        document.getElementById('txtFirstName').value = '';
        // return false;
    }
    // return true;    
}
