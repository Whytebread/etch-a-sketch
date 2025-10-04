// Global variables
const container = document.querySelector(".grid-container");
const gridButton = document.querySelector(".grid-button");

// loop for creating divs and appending to container div
for (i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.className = "square";
    div.style.border = "solid black 1px";
    div.style.width = "60px";
    div.style.height = "60px";
    container.appendChild(div);

    // event listenter to change inital grid color

    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })

}

function createGrid() {
    let gridNumber = parseInt(prompt("Enter the number of squares per side (max 100)"));
    container.innerHTML = ""
    if (gridNumber > 100) {
        let gridNumber = parseInt(prompt("Please enter a number less than 100"));
    } else {
        for (i = 0; i < gridNumber; i++) {
            let div = document.createElement("div");
            div.className = "square";
            div.style.border = "solid black 1px";
            div.style.width = 960 / gridNumber;
            div.style.height = auto;
            container.appendChild(div);

            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            })
        }
    }

}

gridButton.addEventListener("click", ()=> createGrid());
