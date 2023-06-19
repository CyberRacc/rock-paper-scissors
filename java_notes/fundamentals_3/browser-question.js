let browser = prompt("What browser are you using?")

if (browser == "Edge") {
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert(`It's okay, we support ${browser} too.`);
} else if (browser = null || browser == undefined) {
    alert("Cancelled");
} else {
    alert("Hopefully this page looks okay!");
}


