let jsName = prompt("What is the official name of JavaScript? ''");

if(jsName == "ECMAScript") {
    alert("Correct!");
} else if(jsName == null || undefined) {
    alert("Cancelled.")
} else {
    alert("Incorrect, the answer is ECMAScript.")
}