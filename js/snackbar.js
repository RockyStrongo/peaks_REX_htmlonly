const SNACKBAR_SELECTOR = '[data-snack]'
const SNACKBAR_TEXT_SELECTOR = '[data-snack-text]'

const snackbar = document.querySelector(SNACKBAR_SELECTOR)
const snackbarText = document.querySelector(SNACKBAR_TEXT_SELECTOR)

function snack(message) {
    snackbar.setAttribute('aria-hidden', 'false')
    snackbarText.textContent = message;
}