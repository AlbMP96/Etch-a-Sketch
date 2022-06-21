function createGrid(rowNum = 16) {
    const gridCont = document.querySelector(".grid-container");
    const gridSize = gridCont.offsetWidth;
    const squareSize = (gridSize / rowNum) - 1;

    for (let i = 1; i <= (rowNum ** 2); i++) {
        let square = document.createElement("div");
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        if ((i % rowNum) == 0) {
            square.style.borderRight = 'solid 1px black'
        }

        if (i > ((rowNum ** 2) - rowNum)) {
            square.style.borderBottom = 'solid 1px black'
        }

        gridCont.appendChild(square);
        colorGrid(square);
    }

    gridCont.setAttribute('style', `grid-template-columns: repeat(${rowNum}, 1fr)`);
}

function colorGrid(square) {

    const gridCont = document.querySelector(".grid-container");

    let isClicked = false;

    gridCont.addEventListener('mousedown', () => {
        isClicked = true;
    })

    gridCont.addEventListener('mouseup', () => {
        isClicked = false;
    })

    square.addEventListener('mouseover', () => {
        if (isClicked) {
            square.style.backgroundColor = 'blue';
        }
    })
}

createGrid();