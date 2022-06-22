//Create the grid-----------------------------------------------------------------------------------
function createGrid(size = 16) {
    const gridCont = document.querySelector(".grid-container");
    const gridSize = gridCont.offsetWidth;
    const squareSize = (gridSize / size) - 1;

    for (let i = 1; i <= (size ** 2); i++) {
        let square = document.createElement("div");
        square.setAttribute('id', 'square');
        square.style.height = `${squareSize}px`;
        square.style.width = `${squareSize}px`;

        if ((i % size) == 0) {
            square.style.borderRight = 'solid 1px black'
        }

        if (i > ((size ** 2) - size)) {
            square.style.borderBottom = 'solid 1px black'
        }

        gridCont.appendChild(square);
    }

    gridCont.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridCont.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

//Color the squares------------------------------------------------------------------------------------
function colorGrid() {

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

    if (rainbow) {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('mousemove', () => {
                if (isClicked) {
                    squares[i].style.backgroundColor = ConvertRGBtoHex(getRandomRGB(), getRandomRGB(), getRandomRGB());
                }
            })

            squares[i].addEventListener('click', () => {
                squares[i].style.backgroundColor = ConvertRGBtoHex(getRandomRGB(), getRandomRGB(), getRandomRGB());
            })
        }
    } else {
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener('mousemove', () => {
                if (isClicked) {
                    squares[i].style.backgroundColor = getColor();
                }
            })

            squares[i].addEventListener('click', () => {
                squares[i].style.backgroundColor = getColor();
            })
        }
    }
}

//Get the row X columns from the slider---------------------------------------------------------------------
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

//Get the color from the selector--------------------------------------------------------------------------
function getColor() {
    const colorSelector = document.querySelector('.color-selector');
    let color = colorSelector.value;

    return color;
}

//Clear the grid-------------------------------------------------------------------------------------------
function removeGrid() {
    document.querySelectorAll("#square").forEach((e) => e.parentNode.removeChild(e));;
}

//Rainbow mode
//Decimal to Hex------------------------------------------------------------------------------------------
function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

//Transform RGB code to Hex color-------------------------------------------------------------------------
function ConvertRGBtoHex(red, green, blue) {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
}

//Create a rangom RGB code--------------------------------------------------------------------------------
function getRandomRGB() {
    return Math.floor(Math.random() * 255);
}

//Listeners to color the grid squares---------------------------------------------------------------------
let rainbow = false;

document.querySelector(".rainbow").addEventListener('click', (e) => {
    rainbow ? (e.target.style.backgroundColor = '#265294', rainbow = false) : (e.target.style.backgroundColor = 'red', rainbow = true);
})

document.querySelector(".grid-container").addEventListener('mouseover', () => {
    colorGrid();
})