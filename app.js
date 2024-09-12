let form = document.getElementById("form")
let Username = document.getElementById("username")
let UserEmail = document.getElementById("email")
let UserPassword = document.getElementById("password")
let ConfirmPassword = document.getElementById("cpassword")

form.addEventListener("submit", (e) => {
    if (!validateInputs()) {  
        e.preventDefault()
    } else{
        alert("Registered Successfully")
    }
})

function validateInputs() {
    let UsernameVal = Username.value.trim()
    let UserEmailVal = UserEmail.value.trim()
    let UserPasswordVal = UserPassword.value.trim()
    let ConfirmPasswordVal = ConfirmPassword.value.trim()
    let success = true

    if (UsernameVal === "") {
        success = false
        setError(Username, "Username is required")
    } else {
        setSuccess(Username)
    }

    if (UserEmailVal === "") {
        success = false
        setError(UserEmail, "Email is required")
    } else if (!validateEmail(UserEmailVal)) {
        setError(UserEmail, "Email is invalid")  
        success = false
    } else {
        setSuccess(UserEmail)
    }

    if (UserPasswordVal === "") {
        success = false
        setError(UserPassword, "Password is required")
    } else if (UserPasswordVal.length < 8) {
        setError(UserPassword, "Password must be at least 8 characters")
        success = false
    } else {
        setSuccess(UserPassword)
    }

    if (ConfirmPasswordVal === "") {
        success = false
        setError(ConfirmPassword, "Confirm password is required")
    } else if (ConfirmPasswordVal !== UserPasswordVal) {  
        setError(ConfirmPassword, "Passwords do not match")
        success = false
    } else {
        setSuccess(ConfirmPassword)
    }

    return success;  
}

function setError(element, message) {
    let inputGroup = element.parentElement
    let errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = message
    inputGroup.classList.add("error")
    inputGroup.classList.remove("success")
}

function setSuccess(element) {
    let inputGroup = element.parentElement
    let errorElement = inputGroup.querySelector(".error")

    errorElement.innerText = ''
    inputGroup.classList.add("success")
    inputGroup.classList.remove("error")
    
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}
