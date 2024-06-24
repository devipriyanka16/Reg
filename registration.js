function validateFirstName() {
    let fname = document.getElementById("f1").value;
    let fnameMsg = document.getElementById("fname-msg");
    let pattern = /^[A-Za-z]+$/;

    if (pattern.test(fname)) {
        fnameMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        fnameMsg.textContent = "Invalid first name. Please enter letters only.";
        return false;
    }
}

function validateLastName() {
    let lname = document.getElementById("l1").value;
    let lnameMsg = document.getElementById("lname-msg");
    let pattern = /^[A-Za-z]+$/;

    if (pattern.test(lname)) {
        lnameMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        lnameMsg.textContent = "Invalid last name. Please enter letters only.";
        return false;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value;
    let emailMsg = document.getElementById("email-msg");
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (pattern.test(email)) {
        emailMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        emailMsg.textContent = "Invalid email address";
        return false;
    }
}

function validateUsername() {
    let username = document.getElementById("user").value;
    let usernameMsg = document.getElementById("username-msg");
    let pattern = /^(?!.*[_.]{2})[a-zA-Z0-9._-]{3,16}$/;

    if (pattern.test(username)) {
        usernameMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        usernameMsg.textContent = "Invalid username";
        return false;
    }
}

function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let passwordMsg = document.getElementById("password-msg");
    let confirmMsg = document.getElementById("confirm-password-msg");

    if (password !== confirmPassword) {
        passwordMsg.textContent = "Passwords do not match";
        confirmMsg.textContent = "Passwords do not match";
        return false;
    } else {
        passwordMsg.textContent = ""; // Clear error message if passwords match
        confirmMsg.textContent = ""; // Clear error message if passwords match
        return true;
    }
}

function validateCity() {
    let city = document.getElementById("city").value;
    let cityMsg = document.getElementById("city-msg");
    let pattern = /^[A-Za-z\s]+$/;

    if (pattern.test(city)) {
        cityMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        cityMsg.textContent = "Invalid city name. Please enter letters and spaces only.";
        return false;
    }
}

function validateCountry() {
    let country = document.getElementById("country").value;
    let countryMsg = document.getElementById("country-msg");
    let pattern = /^[A-Za-z\s]+$/;

    if (pattern.test(country)) {
        countryMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        countryMsg.textContent = "Invalid country name. Please enter letters and spaces only.";
        return false;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value;
    let phoneMsg = document.getElementById("phone-msg");
    let pattern = /^[0-9]{10}$/;

    if (pattern.test(phone)) {
        phoneMsg.textContent = ""; // Clear error message if valid
        return true;
    } else {
        phoneMsg.textContent = "Invalid phone number. Please enter a 10 digit number.";
        return false;
    }
}

function validateGender() {
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let genderMsg = document.getElementById("gender-msg");

    if (male || female) {
        genderMsg.textContent = ""; // Clear error message if gender is selected
        return true;
    } else {
        genderMsg.textContent = "Please select your gender.";
        return false;
    }
}

function validateForm() {
    let isValid = true;

    if (!validateFirstName()) isValid = false;
    if (!validateLastName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validateUsername()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateCity()) isValid = false;
    if (!validateCountry()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateGender()) isValid = false;

    // Prevent form submission if any validation fails
    if (!isValid) {
        event.preventDefault(); // Prevent default form submission behavior
    }
    else{
        alert("Form submitted successfully");
    }

    return isValid;
}
