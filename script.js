const form = document.querySelector('.form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phoneNumber = document.querySelector('#phone-number');
const password = document.querySelector('#password');
const cPassword = document.querySelector('#c-password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get values from inputs
    const firstValue = firstName.value.trim();
    const lastValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phoneNumber.value.trim();
    const passValue = password.value.trim();
    const cPassValue = cPassword.value.trim();

    if (firstValue === '') {
        //show error
        //add error class
        setErrorFor(firstName, 'Please provide a first name');
    } else {
        //add success class
        setSuccessFor(firstName);
    }
    if (lastValue === '') {
        setErrorFor(lastName, 'Please provide a last name');
    } else {
        setSuccessFor(lastName);
    }
    if (emailValue === '') {
        setErrorFor(email, 'An Email is required');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    if (phoneValue === '') {
        setErrorFor(phoneNumber, 'A phone number is required');
    } else if (!isPhoneNumber(phoneValue)) {
        setErrorFor(phoneNumber, 'Phone number is not valid');
    } else {
        setSuccessFor(phoneNumber);
    }
    if (passValue === '') {
        setErrorFor(password, 'Please enter your password');
    } else if (passValue.length <= 5) {
        setErrorFor(password, 'Password must be longer than 5 characters');
    } else if (passValue.length >= 20) {
        setErrorFor(password, 'Password must be less than 20 characters');
    } else {
        setSuccessFor(password);
    }
    if (cPassValue === '') {
        setErrorFor(cPassword, 'Please confirm your password');
    } else if (cPassValue.length <= 5) {
        setErrorFor(cPassword, 'Password must be longer than 5 characters');
    } else if (cPassValue.length >= 20) {
        setErrorFor(cPassword, 'Password must be less than 20 characters');
    } else if (passValue !== cPassValue) {
        setErrorFor(cPassword, 'Passwords do not match');
    } else {
        setSuccessFor(cPassword);
    }
}

function setErrorFor(input, message) {
    const formRow = input.parentElement; //.form-row
    const small = formRow.querySelector('small');

    //add error message to small 
    small.innerText = message;

    //add error class
    formRow.className = 'form-row error';
}

function setSuccessFor(input) {
    const formRow = input.parentElement;
    formRow.className = 'form-row success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhoneNumber(phoneNumber) {
    return /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phoneNumber);
}
