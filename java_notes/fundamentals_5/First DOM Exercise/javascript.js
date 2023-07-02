const container = document.querySelector(".container");

const content = document.createElement("div");
content.classList.add("content");
container.appendChild(content);

const redParagraph = document.createElement("p");
redParagraph.textContent = "Hey, I'm red!";
redParagraph.style.color = "red";
content.appendChild(redParagraph)

const blueHeading = document.createElement("h3");
blueHeading.textContent = "I'm a blue h3!";
blueHeading.style.color = "blue";
content.appendChild(blueHeading);

const styledDiv = document.createElement("div");
styledDiv.style.border = "4px solid black";
styledDiv.style.backgroundColor = "pink";

const divH1 = document.createElement("h1");
divH1.textContent = "I'm a div!";
styledDiv.appendChild(divH1);

const meToo = document.createElement("p");
meToo.textContent = "ME TOO!";
styledDiv.appendChild(meToo)

content.appendChild(styledDiv);
