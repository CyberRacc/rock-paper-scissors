// I need to write code to check the login of a user.

let userName = prompt("Who is there?", "");

if (userName === "Admin") {

    let pass = prompt("Password?", '');

    if(pass === "TheMaster") {
        alert("Welcome!");
    } else if(pass === '' || pass === null) {
        alert("Cancelled")
    } else {
        alert("Wrong password");
    }

} else if (userName === "" || userName === null) {
    alert("Cancelled");
} else {
    alert("I don't know you");
}
