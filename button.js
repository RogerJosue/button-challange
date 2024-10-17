const father = document.createElement("div")
father.classList.add("father1")


const button = document.createElement("button")
button.classList.add("button1")
button.innerText = "click Me";

let parent = document.body;


parent.appendChild(father);
parent.appendChild(button)

let change;
const changeColor = () => {
     change ? father.style.backgroundColor = "red" : father.style.backgroundColor = "rgb(12, 21, 21)";
  change = !change; 
}

button.onclick = changeColor;