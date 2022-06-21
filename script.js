function createGrid(rowNum = 16) {
    const gridCont = document.querySelector(".grid-container");
    const gridSize = gridCont.offsetWidth;
    const squareSize = (gridSize / rowNum) - 2;

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
    }

    gridCont.setAttribute('style', `grid-template-columns: repeat(${rowNum}, ${rowNum}fr)`);
}

createGrid();