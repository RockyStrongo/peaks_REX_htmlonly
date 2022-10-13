function validations () {
    let email = document.forms["connection-form"]["login"].value
    let password = document.forms["connection-form"]["password"].value

    if (!email.includes("peaks")) {
        snack("L'adresse email doit contenir appartenir à Peaks")
        return false
    } else {
        if (password.length < 5) {
            snack("Le mot de passe doit contenir au miminum 5 caractères")
            return false
          }
    }
}