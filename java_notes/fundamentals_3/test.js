
const button = document.querySelector("button");

function greet() {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener("click", greet);

const myString = "123";
const myNum = Number(myString);

console.log(typeof myNum);

let txt = "I can eat bananas all day";
let x = txt.slice(10, -8);
console.log(x);  // Outputs: bananas
