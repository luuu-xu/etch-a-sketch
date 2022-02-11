const container = document.querySelector('.container');

function createGrid(number) {
    for (i = 1; i <= number ** 2; i++) {
        const pixel = document.createElement('div');
        pixel.setAttribute('class', 'pixel');
        container.appendChild(pixel);
    };
    container.style.cssText = 
    `grid-template-columns: repeat(${number}, auto); 
    grid-template-rows: repeat(${number}, auto)`;
};

function drawing() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseenter', () => {
            pixel.style.cssText = 'background-color: black';
        });
    });
};

createGrid(16);
drawing();

function erase() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.style.cssText = 'background-color: antiquewhite';
    });
};

const btnErase = document.querySelector('.erase');
btnErase.addEventListener('click', erase);

const btnResize = document.querySelector('.resize');

function reset() {
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        container.removeChild(pixel);
    });
};

function whatSize() {
    input = prompt('Enter a number between 10 and 100 as the size of the grid.', '16');
    input = Number(input);
    if (!Number.isInteger(input)) {
        number = 16;
    } else if (input > 100) {
        number = 100;
    } else if (input < 10) {
        number = 10;
    } else {
        number = input;
    };
    return number;
};

function resize() {
    reset();
    createGrid(whatSize());
    drawing();
}

btnResize.addEventListener('click', resize);