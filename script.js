containerEl = document.querySelector(".container");

function createDivs(){
    for (var i = 0; i < 256; i++){
        const divBox = document.createElement("div");
        divBox.classList.add("divBox");
        containerEl.appendChild(divBox);
    }
}

createDivs();