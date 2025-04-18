const containerEl = document.querySelector(".container");
const resetbutton = document.getElementById("resetButton");
const newGridButton = document.getElementById("newGridButton")
let n = 16; //initial grid size

function createGrid(n){
    for (var i = 0; i < n*n; i++){
        const divBox = document.createElement("div");
        divBox.style.width = `${960 / n}px`;
        divBox.style.height = `${960 / n}px`;
        
        divBox.classList.add("divBox");

        divBox.addEventListener("mouseover", () => {
            divBox.style.backgroundColor = "black";
        });

        containerEl.appendChild(divBox);

        resetbutton.addEventListener("click", () => {
            divBox.style.backgroundColor = "rgb(197, 197, 197)";
        });
    }
}

createGrid(n);

newGridButton.addEventListener("click", () => {
    n = window.prompt("Enter new grid size: ");

    if (n > 3 && n <= 100){
        containerEl.innerHTML = "";
        createGrid(n);
    }
    else{
        alert("Invalid size.");
    }
});
