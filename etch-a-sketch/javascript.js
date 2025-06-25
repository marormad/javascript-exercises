// The div that is already created in the html and will contain all the squares that will be colored
const container = document.getElementById('bigContainer');

// Creation of 16 divs, that will appear as a grid with CSS
// Basic grid with fixed size and just one color
for (let i = 0; i < 16; i++) {
    let divi = document.createElement('div');
    divi.setAttribute('id', `divi_${i}`);
    divi.setAttribute('class', 'divi');
    container.append(divi);
}

// On mouse hover, background color of a 'squared div' should change
const divis = document.querySelectorAll('.divi');

divis.forEach((divi) => {
    divi.addEventListener('mouseenter', function () {
        this.style.backgroundColor = "red";
    });
});



