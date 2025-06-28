// The div that is already created in the html and will contain all the squares that will be colored
const container = document.getElementById('bigContainer');

// Upon user entering a number (between 1 and 100) the web will generate a new grid
const btnGridGenerator = document.querySelector('#btnGridGenerator');
const inputText = document.getElementById('inputText');


// Creation of 16 divs, that will appear as a grid with CSS
// Basic grid with fixed size
// This will be the default grid
gridGenerator(4);
hoverAttacher();



// Attach the button to the user entering a number in the text area
btnGridGenerator.addEventListener('click', function() {
    let userInput = inputText.value;
    let sizeOfGrid = textIsNumber(userInput);
    gridGenerator(sizeOfGrid);
    hoverAttacher();  
});


// User input validator. Text must be a number between 1 and 100.
// Default will be 16
function textIsNumber (input) {
    let value = Math.round(Number(input));
    if (isNaN(value)) {
        alert ('Value must be a number between 1 and 100!');
        return 4;
    } if (value > 0 && value <= 100) {
        return value;
    } if (value > 100) {
        return 100;
    } return 4;
};

// Delete previous grid and create a new one with the number of squares desired by the user
function gridGenerator(value) {
    // Deletion is as simple as that:
    container.innerHTML = '';
    //const divis = document.querySelectorAll('.divi');
    //divis.forEach(element => element.remove());

    // Creation of the new grid with flexible size
    for (let i = 0; i < value * value; i++) {
        let divi = document.createElement('div');
        divi.setAttribute('id', `divi_${i}`);
        divi.setAttribute('class', 'divi');
        let squareSize = 100 / value + '%';
        divi.style.width = squareSize;
        divi.style.height = squareSize;
        container.append(divi);
    }
};

// On mouse hover, background color of a 'squared div' should change to red
function hoverAttacher() {
    const divis = document.querySelectorAll('.divi');
    divis.forEach((divi) => {
        divi.addEventListener('mouseenter', function () {
            this.style.backgroundColor = rainbowColors();
    });
});
};

// Function that will randomize the color aplied to each square
function rainbowColors() {
    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    let randB = Math.floor(Math.random() * 256);
    
    return `rgb(${randR}, ${randG}, ${randB})`;
}