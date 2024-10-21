const father = document.createElement("div")
father.classList.add("father1")


const button = document.createElement("button")
button.classList.add("button1")
button.innerText = "click Me";

let parent = document.body;


parent.appendChild(father);
parent.appendChild(button)


let colors = ['#220C10', '#506C64', '#77CBB9', '#75B8C8', '#CDD3D5', '#CAE9FF'];
const changeColor = () => {
       father.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
  return !father.style.backgroundColor; 
}

button.onclick = changeColor;