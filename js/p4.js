
var password;
var tries = 0;
while (password !== "secret" && tries != 3) {
    password = prompt("Enter the secret password:")
    tries++;
}
if (password == "secret") {
    alert("You entered the correct password");
}
else if (tries == 3) {
    alert("Your account is locked!!!")
}

