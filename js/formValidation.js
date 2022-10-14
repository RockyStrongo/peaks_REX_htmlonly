const EMAIL_INPUT_SELECTOR = '[data-input-email]'
const CONNEXION_FORM_SELECTOR = '[data-form-connection]'

const emailInput = document.querySelector(EMAIL_INPUT_SELECTOR)
const connectionForm = document.querySelector(CONNEXION_FORM_SELECTOR)

const ERROR_MESSAGE_INVALID_EMAIL = "L'adresse email doit être valide";
const ERROR_MESSAGE_EMAIL_PEAKS = "L'adresse email doit appartenir à Peaks";
const ERROR_MESSAGE_PASSWORD_COMPLEXITY = "Le mot de passe doit contenir au minimum 8 caractères, un chiffre et une majuscule";


const PASSWORD_COMPLEXITY_REGEX = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
const VALID_EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

function validations() {
    const emailInputvalue = emailInput.value
    const passwordInputvalue = passwordInput.value

    if (!emailIsValid(emailInputvalue)) {
        return false
    }
    else if (!emailIsPeaks(emailInputvalue)) {
        return false
    }
    else if (!passwordIdComplex(passwordInputvalue)) {
        return false
    }
    else
        return true
}


function emailIsValid(email) {
    if (!VALID_EMAIL_REGEX.test(email)) {
        snack(ERROR_MESSAGE_INVALID_EMAIL)
        return false
    } else {
        console.log('emailIsValid true')
            return true
    }

}

function emailIsPeaks(email) {
    if (!email.includes("peaks")) {
        snack(ERROR_MESSAGE_EMAIL_PEAKS)
        return false
    } else {
        console.log('emailIsPeaks true')
        return true
    }

}

function passwordIdComplex(password) {
    if (!PASSWORD_COMPLEXITY_REGEX.test(password)) {
        snack(ERROR_MESSAGE_PASSWORD_COMPLEXITY)
        return false
    } else {
        console.log('passwordIdComplex true')
        return true
    }
}

connectionForm.addEventListener('submit', validations)