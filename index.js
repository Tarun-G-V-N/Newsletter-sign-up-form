const signUpPage = document.getElementById('signUp');
const successPage = document.getElementById('success');
const submitBtn = document.getElementById('submitButton');
const dismissBtn = document.getElementById('dismissButton');

successPage.classList.add('hidden');

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
        return false; // Prevent form submission
    }
    return true;
}

submitBtn.onclick = function(event) {
    event.preventDefault();
    if(validateEmail()) {
        signUpPage.classList.add('hidden');
        successPage.classList.remove('hidden');
        successPage.classList.add('successStyle');
    }
    else {
        document.getElementById('errorLabel').classList.add('errorStyle');
        document.getElementById('email').classList.add('errorEmailBox');
    }
}

dismissBtn.onclick = function() {
    successPage.classList.add('hidden');
    signUpPage.classList.remove('hidden');
    signUpPage.classList.add('signUpStyle');
    document.getElementById('errorLabel').classList.remove('errorStyle');
    document.getElementById('email').classList.remove('errorEmailBox');
}