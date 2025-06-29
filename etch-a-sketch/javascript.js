// The div that is already created in the html and will contain all the squares that will be colored
const container = document.getElementById('bigContainer');

// Upon user entering a number (between 1 and 100) the web will generate a new grid
const btnGridGenerator = document.querySelector('#btnGridGenerator');
const inputText = document.getElementById('inputText');

// Side buttons
const sideButtons = document.querySelectorAll('#sideButtons button');
const btnRainbow = document.querySelector('#btnRainbow');
const btnGreyScale = document.querySelector('#btnGreyScale');
const btnDarken = document.querySelector('#btnDarken');
const btnLighten = document.querySelector('#btnLighten');
const btnClear = document.querySelector('#btnClear');
const btnDrop = document.querySelector('.btnDrop');

// Creation of 16 divs, that will appear as a grid with CSS
// Basic grid with fixed size
// This will be the default grid
gridGenerator(4);

// Attach to the main button the value entered by the user
btnGridGenerator.addEventListener('click', function() {
    let userInput = inputText.value;
    let sizeOfGrid = textIsNumber(userInput);
    gridGenerator(sizeOfGrid);
    deactivateSideButton();
    inputText.value = '';
});

// Attach the rainbow mode to the proper button
btnRainbow.addEventListener('click', function () {
    hoverAttacher('rainbow');
    deactivateSideButton();
    this.classList.add('active');
});

// Same with the greyscale button
btnGreyScale.addEventListener('click', function () {
    hoverAttacher('greyScale');
    deactivateSideButton();
    this.classList.add('active');
});

// Darken button
btnDarken.addEventListener('click', function() {
    hoverAttacher('darken');
    deactivateSideButton();
    this.classList.add('active');
});

// Lighten button
btnLighten.addEventListener('click', function() {
    hoverAttacher('lighten');
    deactivateSideButton();
    this.classList.add('active');
});

// Clear grid button
btnClear.addEventListener('click', function () {
    const divis = document.querySelectorAll('.divi');
    divis.forEach((divi) => {
        divi.style.backgroundColor = 'rgb(220, 220, 220)';
    });
});

// DropDown button
btnDrop.addEventListener('click', enableDropDown);

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
        // No matter the number of squares per side, they will always amount the same total size
        let squareSize = 100 / value + '%';
        divi.style.width = squareSize;
        divi.style.height = squareSize;
        // Initialize background color
        divi.style.backgroundColor = 'rgb(220, 220, 220)';
        container.append(divi);
    }
};

// On mouse hover, background color of a 'squared div' should change to red
function hoverAttacher(option) {
    // Select and delete previous eventListeners
    const divis = document.querySelectorAll('.divi');
    divis.forEach((divi) => {
        divi.replaceWith(divi.cloneNode(true));
    });
    
    // Select again same (copied) divs
    const newDivis = document.querySelectorAll('.divi');
    newDivis.forEach((divi) => {
        divi.addEventListener('mouseenter', function () {
            if (option === 'rainbow'){ 
                this.style.backgroundColor = rainbowColors();

            } else if (option === 'greyScale'){ 
                this.style.backgroundColor = greyScaleColors();

            } else if (option === 'darken') {
                const currentColor = getComputedStyle(this).backgroundColor;
                const newColor = modifyBrightness(currentColor, 0.1);
                this.style.backgroundColor = newColor;

            } else if (option === 'lighten') {
                let currentColor = getComputedStyle(this).backgroundColor;
                // If square is already white, skip
                if (currentColor === 'rgb(255, 255, 255)') return;
                const newColor = modifyBrightness(currentColor, -0.1);
                this.style.backgroundColor = newColor;
            }
    });
});
};

// Function that will randomize the color aplied to each square
function rainbowColors() {
    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    let randB = Math.floor(Math.random() * 256);
    
    return `rgb(${randR}, ${randG}, ${randB})`;
};

// Function that will generate a greyscale
function greyScaleColors() {
    let randomColor = Math.floor(Math.random() * 256);    
    return `rgb(${randomColor}, ${randomColor}, ${randomColor})`;
};

// Function to darken the current color of a square
function modifyBrightness(rgbString, amount = 0.1) {
    const rgb = rgbString.match(/\d+/g).map(Number);

    const adjustedBrightness = rgb.map(channel => {
        if (amount > 0) { // darken
            return Math.max(0, Math.round(channel * (1 - amount)));
        } else { // lighten
            return Math.min(255, Math.round(channel + (255 - channel) * -amount));
        }
    });

    return `rgb(${adjustedBrightness[0]}, ${adjustedBrightness[1]}, ${adjustedBrightness[2]})`;
}


// Activate one side button on click, and deactivate the others
function deactivateSideButton() {
    sideButtons.forEach((button) => {
        button.classList.remove('active');
    });
}

/* ##### DROPDOWN MENU CODE ##### */
// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function enableDropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
};

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.btnDrop')) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
        openDropdown.classList.remove('show');
      }
    }
};

// Attach an eventListener to the first dropdown menu option
document.querySelectorAll('.drawImage').forEach(option => {
  option.addEventListener('click', function (e) {
    e.preventDefault();

    // Step 1: Generate fresh grid
    gridGenerator(100);
    deactivateSideButton();

    // Step 2: Load predefined image
    const imgSrc = this.dataset.img;
    const img = new Image();
    img.onload = function () {
        console.log("Image loaded");
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 100, 100);
      ctx.drawImage(img, 0, 0, 100, 100);

      // Step 3: Get pixel data
      const imageData = ctx.getImageData(0, 0, 100, 100).data;
      const cells = document.querySelectorAll('.divi');

      // Step 4: Apply colors to grid
      cells.forEach((cell, i) => {
        const x = i % 100;
        const y = Math.floor(i / 100);
        const index = (y * 100 + x) * 4;
        const r = imageData[index];
        const g = imageData[index + 1];
        const b = imageData[index + 2];
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });
    };

    img.src = imgSrc;
  });
});
