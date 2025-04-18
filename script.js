containerEl = document.querySelector(".container");

//16x16 grid
function createInitialGrid(){
    for (var i = 0; i < 256; i++){
        const divBox = document.createElement("div");
        divBox.classList.add("divBox");
        containerEl.appendChild(divBox);
    }
}

createInitialGrid();