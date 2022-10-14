const EMAIL_INPUT_SELECTOR = '[data-input-email]'
const CONNEXION_FORM_SELECTOR = '[data-form-connection]'

const emailInput = document.querySelector(EMAIL_INPUT_SELECTOR)
const connectionForm = document.querySelector(CONNEXION_FORM_SELECTOR)

const ERROR_MESSAGE_INVALID_EMAIL = "L'adresse email doit être valide";
const ERROR_MESSAGE_EMAIL_PEAKS = "L'adresse email doit appartenir à Peaks";
const ERROR_MESSAGE_PASSWORD_COMPLEXITY = "Le mot de passe doit contenir au minimum 8 caractères, un chiffre et une majuscule";

const PASSWORD_COMPLEXITY_REGEX = new RegExp("^(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");
const VALID_EMAIL_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const validation = (e) => {
    e.preventDefault();

    const emailInputvalue = emailInput.value
    const passwordInputvalue = passwordInput.value

    if (!emailIsValid(emailInputvalue)) {
        snack(ERROR_MESSAGE_INVALID_EMAIL)
        return false
    }
    else if (!emailIsPeaks(emailInputvalue)) {
        snack(ERROR_MESSAGE_EMAIL_PEAKS)
        return false
    }
    else if (!passwordIdComplex(passwordInputvalue)) {
        snack(ERROR_MESSAGE_PASSWORD_COMPLEXITY)
        return false
    }
    else
        connectionForm.submit()
 
}

function emailIsValid(email) {
    return VALID_EMAIL_REGEX.test(email) || false
}

function emailIsPeaks(email) {
    return email.includes("peaks") || false
}

function passwordIdComplex(password) {
    return PASSWORD_COMPLEXITY_REGEX.test(password) || false
}

connectionForm.addEventListener('submit', validation)

