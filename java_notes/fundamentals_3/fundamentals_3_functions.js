function add7(a) {
    return a + 7;
}

function multiply(a, b) {
    return a * b;
}

function capitalise(string) {

    let firstLetter = string.slice(0, 1);

    let firstLetterUpper = firstLetter.toUpperCase();

    let restString = string.slice(1, );

    let restStringLower = restString.toLowerCase();

    return firstLetterUpper + restStringLower;
    
}

function lastLetter(string) {
    let lastLetter = string.slice(-1);

    return lastLetter;
}