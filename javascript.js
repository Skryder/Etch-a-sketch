
let gridSize = 16;

let etchasketch = document.querySelector('#etchasketch');

function onHover(block) {
    block.style.backgroundColor = getRandomColor();
    //block.style.backgroundColor = "black";
    console.log(block.style.opacity);
    block.style.opacity = (parseFloat(block.style.opacity) + 0.1).toString();
    console.log(block.style.opacity);
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
            block.style.opacity = 0.1;
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

//Stolen code
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

createPage();



