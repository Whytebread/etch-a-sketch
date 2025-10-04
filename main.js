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
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })

}

function createGrid() {
    // prompts the user to enter a number and validates that input is a number between 1 and 100
    let gridNumber = parseInt(prompt("Enter the number of squares per side (max 100)"));
    while (isNaN(gridNumber) || gridNumber < 1 || gridNumber > 100) {
        gridNumber = parseInt(prompt("Please enter a number between 1 and 100"));
    }
    // clears initial grid from the container
    container.innerHTML = ""

    // loop that generates divs sized according to the number input from the user
    for (i = 0; i < gridNumber * gridNumber; i++) {
        let div = document.createElement("div");
        div.className = "square";
        div.style.border = "solid black 1px";
        div.style.width = 960 / gridNumber + "px";
        div.style.height = 960 / gridNumber + "px";
        container.appendChild(div);

        // moseover event listener that generates random background colors
        div.addEventListener("mouseover", () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        })
    }
}

gridButton.addEventListener("click", () => createGrid());
