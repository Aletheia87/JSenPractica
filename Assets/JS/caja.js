let color1 = document.getElementById('btn-1').addEventListener('click', rojo);
let color2 = document.getElementById('btn-2').addEventListener('click', naranjo);
let color3 = document.getElementById('btn-3').addEventListener('click', amarillo);
let color4 = document.getElementById('btn-4').addEventListener('click', verde);
let color5 = document.getElementById('btn-5').addEventListener('click', azul);
let color6 = document.getElementById('btn-6').addEventListener('click', morado);

function rojo() {
    document.getElementById('caja').style.background = '#e53e3e';
}

function naranjo() {
    document.getElementById('caja').style.background = '#dd6b20';
}

function amarillo() {
    document.getElementById('caja').style.background = '#faf089';
}

function verde() {
    document.getElementById('caja').style.background = '#48bb78';
}

function azul() {
    document.getElementById('caja').style.background = '#81e6d9';
}

function morado() {
    document.getElementById('caja').style.background = '#d53f8c';
}