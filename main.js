// Global variables
const container = document.querySelector(".grid-container");

// loop for creating divs and appending to container div
for (i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.className = "square";
    div.style.border= "solid black 1px";
    div.style.width= "60px";
    div.style.height= "60px";
    container.appendChild(div);

    // event listenter to change inital grid color

div.addEventListener("mouseover", ()=> {
    div.style.backgroundColor = "black";
})

}

// function createGrid {
//     container.innerHTML=""
    
// }
