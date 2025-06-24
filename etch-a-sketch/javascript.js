const container = document.getElementById('bigContainer');

for (let i = 0; i < 16; i++) {
    let divi = document.createElement('div');
    divi.setAttribute('id', `divi_${i}`);
    container.append(divi);
}