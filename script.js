function createGrid(rowNum = 16) {
    const gridCont = document.querySelector(".grid-container");
    const gridSize = gridCont.offsetWidth;
    const squareSize = (gridSize / rowNum) - 1;

    for (let i = 1; i <= (rowNum ** 2); i++) {
        let square = document.createElement("div");
        square.setAttribute('id', 'square');
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

    gridCont.setAttribute('style', `grid-template-columns: repeat(${rowNum}, 1fr)`);
}

function colorGrid(color = 'black') {

    const gridCont = document.querySelector(".grid-container");
    let squares = gridCont.childNodes;

    let isClicked = false;

    gridCont.addEventListener('mousedown', (e) => {
        if (e.button === 0) {
            isClicked = true;
        }
    })

    gridCont.addEventListener('mouseup', (e) => {
        if (e.button === 0) {
            isClicked = false;
        }
    })

    gridCont.addEventListener('mouseleave', () => {
        isClicked = false;
    })

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mousemove', () => {
            if (isClicked) {
                squares[i].style.backgroundColor = color;
            }
        })

        squares[i].addEventListener('click', () => {
            squares[i].style.backgroundColor = color;
        })
    }
}

function getGridSize() {
    const slider = document.getElementById("row-range");
    const output = document.getElementById("size");
    output.textContent = slider.value;

    createGrid(slider.value);

    slider.oninput = function () {
        removeGrid();
        output.textContent = this.value;
        createGrid(slider.value);
    }
}

function getColor() {
    const colorSelector = document.querySelector('.color-selector');
    let color = colorSelector.value;

    return color;
}

function removeGrid() {
    document.querySelectorAll("#square").forEach((e) => e.parentNode.removeChild(e));;
}

document.querySelector(".grid-container").addEventListener('mouseover', () => {
    colorGrid(getColor());
})