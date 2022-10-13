function togglepassword() {
    let fieldtype = document.getElementById('password').type.toLowerCase();

    if (fieldtype == 'password'){
        document.getElementById('password').type = 'text'
        document.getElementById("pw-eye-open").style.display = "none"
        document.getElementById("pw-eye-closed").style.display = "flex"
    } else {
        document.getElementById('password').type = 'password'
        document.getElementById("pw-eye-open").style.display = "flex"
        document.getElementById("pw-eye-closed").style.display = "none"
    }

}