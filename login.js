function validateInput() {
    var nameInput = document.getElementById("nameInput");
    var emailInput = document.getElementById("emailInput");
    var passwordInput = document.getElementById("passwordInput");
    var messageElement = document.getElementById("message");

    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    if (password === "" || email === "" && name === "") {
        alert("Please enter currect information");
    } else {
        alert("Success! Your account is created.");
    }
}
