const father = document.createElement("div")
father.classList.add("father1")


const button = document.createElement("button")
button.classList.add("button1")
button.innerText = "click Me";

let parent = document.body;


parent.appendChild(father);
parent.appendChild(button)


const changeColor = () => {
   
 father.style.backgroundColor = "red";
}

button.onclick = changeColor;