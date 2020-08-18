//
// Práctica 10 - Cronómetro
//

let temporizador;

let cronometro = 0;

function inicial() {
    const inicio = document.getElementById('cronometro');
    cronometro++;
    inicio.innerHTML = cronometro;
}

function bottonStart() {
    temporizador = window.setInterval(inicial, 1000);
}

const startBotton = document.getElementById('iniciar');
startBotton.addEventListener('click', bottonStart);

function clean() {
    const cleaning = document.getElementById('cronometro');
    cronometro = 0;
    cleaning.innerHTML = cronometro;
}
const cleanBotton = document.getElementById('limpiar');
cleanBotton.addEventListener('click', clean);

const detenerBotton = document.getElementById('detener');
detenerBotton.addEventListener('timeupdate', bottonStart)