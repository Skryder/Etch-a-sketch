
let gridSize = 16;

let etchasketch = document.querySelector('#etchasketch');

function onHover(block) {
    block.style.backgroundColor = "blue";
}

const gridSizeBtn = document.querySelector("#gridSizeBtn");

gridSizeBtn.addEventListener('click', () => {
    gridSize = prompt("Please enter the size of the grid (Max 100)");
    if (gridSize > 100)
    {
        gridSize = 100;
    }
    clearPage();
    createPage();
});

function createPage() {
    for (let ii = 0; ii < gridSize; ii++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let jj = 0; jj < gridSize; jj++) {
            const block = document.createElement("div");
            block.classList.add("block");
            //Gotta set the width and height of each block to take the right amount of space.
            block.style.width = `calc(100vh/${gridSize})`;
            block.style.height = `calc(100vh/${gridSize})`;
            //add the effect when it hovers
            block.addEventListener('mouseover', () => {onHover(block)});
            row.appendChild(block);
        }
        etchasketch.appendChild(row);
    }
}

function clearPage() {
    //nested functions yay
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    while (etchasketch.firstChild) {
        removeAllChildNodes(etchasketch.firstChild);
        etchasketch.removeChild(etchasketch.firstChild);
    }
}



createPage();



