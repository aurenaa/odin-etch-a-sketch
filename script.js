containerEl = document.querySelector(".container");

//16x16 grid
function createInitialGrid(){
    for (var i = 0; i < 256; i++){
        const divBox = document.createElement("div");
        divBox.classList.add("divBox");

        divBox.addEventListener('mouseover', function() {
            divBox.style.backgroundColor = "grey";
        });

        containerEl.appendChild(divBox);
    }
}

createInitialGrid();
