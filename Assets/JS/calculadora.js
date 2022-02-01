const valor1 = document.getElementById('valor1');
const valor2 = document.getElementById('valor2');
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');

btnSumar.addEventListener('click', function(event){
    event.preventDefault();
    document.querySelector('.resultado').innerHTML = parseInt(valor1.value) + parseInt(valor2.value);
});

btnRestar.addEventListener('click', function(event){
    event.preventDefault();
    if (parseInt(valor1.value) < parseInt(valor2.value)) {
        document.querySelector('.resultado').innerHTML = 0;
    }else{
        document.querySelector('.resultado').innerHTML = parseInt(valor1) - parseInt(valor2);
    }
});