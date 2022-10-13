const PASSWORD_INPUT_SELECTOR = '[data-input-password]'
const EYE_OPEN_SELCTOR = '[data-eye=open]'
const EYE_CLOSE_SELCTOR = '[data-eye=close]'
const EYES_SELECTOR = '[data-eye]'

const passwordInput = document.querySelector(PASSWORD_INPUT_SELECTOR)
const eyeOpenIcon = document.querySelector(EYE_OPEN_SELCTOR)
const eyeCloseIcon = document.querySelector(EYE_CLOSE_SELCTOR)
const eyeIcons = document.querySelectorAll(EYES_SELECTOR)

function togglepassword() {
    const fieldtype = passwordInput.type.toLowerCase();

    fieldtype === 'password' ? showPassword() : hidePassword()
}

function showPassword() {
    passwordInput.type = 'text'
    eyeOpenIcon.setAttribute('aria-hidden', 'true')
    eyeCloseIcon.setAttribute('aria-hidden', 'false')
}

function hidePassword() {
    passwordInput.type = 'password'
    eyeOpenIcon.setAttribute('aria-hidden', 'false')
    eyeCloseIcon.setAttribute('aria-hidden', 'true')
}

eyeIcons.forEach(icon => {
    icon.addEventListener('click', togglepassword)
});

