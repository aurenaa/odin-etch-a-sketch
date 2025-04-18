const containerEl = document.querySelector(".container");
const button = document.getElementById("resetButton");

//16x16 grid
function createInitialGrid(){
    for (var i = 0; i < 256; i++){
        const divBox = document.createElement("div");
        divBox.classList.add("divBox");

        divBox.addEventListener('mouseover', function() {
            divBox.style.backgroundColor = "grey";
        });

        containerEl.appendChild(divBox);

        button.addEventListener("click", () => {
            divBox.style.backgroundColor = "rgb(197, 197, 197)";
        });
    }
}


createInitialGrid();
