const form = document.querySelector("form");
const inputs = document.querySelectorAll("form input");
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const confirmPassInput = document.querySelector("#confirmPass");
const errorText = document.querySelectorAll(".error-validation");
const signUpBtn = document.querySelector("button[type='submit']");

// Set userName validation
function userName() {
    if (userNameInput.value === "") {
        errorValid(userNameInput, `${userNameInput.name} is required field`);
    } else {
        successValid(userNameInput);
    }
}

// Set email validation parametrs
const isValidEmail = (email) => {
    const reqEmail =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reqEmail.test(String(email).toLowerCase());
};

// Set email validation
function email() {
    // Check email emty | Not
    if (emailInput.value === "") {
        errorValid(emailInput, `${emailInput.name} is required field`);
    } else if (!isValidEmail(emailInput.value)) {
        errorValid(emailInput, `invalid ${emailInput.name} address`);
    } else {
        successValid(emailInput);
    }
}

// Set password validation
function password() {
    // Check password emty | Not
    if (passwordInput.value === "") {
        errorValid(passwordInput, `${passwordInput.name} is required field`);
    }
    // How much password strong
    else if (passwordInput.value.length < 8) {
        errorValid(passwordInput, `${passwordInput.name} is week`);
    } else {
        successValid(passwordInput);
    }
}

// Check Confirm password
function confirmPass() {
    // Check password emty | Not
    if (confirmPassInput.value === "") {
        errorValid(confirmPassInput, `${confirmPassInput.name} is required field`);
    }
    // How much password strong
    else if (confirmPassInput.value !== passwordInput.value) {
        errorValid(confirmPassInput, `${confirmPassInput.name} is wrong`);
    } else {
        successValid(confirmPassInput);
    }
}

// Set error message => When parametr invalid
function errorValid(element, message) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-validation");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("success");
}

// Show success element & hide error message => When parametr valid
function successValid(element) {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error-validation");
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
}

signUpBtn.addEventListener("click", (element) => {
    userName();
    email();
    password();
    confirmPass();
    element.preventDefault();
    form.reset();
});

userNameInput.addEventListener("blur", userName);
emailInput.addEventListener("blur", email);
passwordInput.addEventListener("blur", password);
confirmPassInput.addEventListener("blur", confirmPass);