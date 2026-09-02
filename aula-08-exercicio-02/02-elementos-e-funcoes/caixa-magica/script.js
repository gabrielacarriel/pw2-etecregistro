// JAVASCRIPT

const caixaMagica = document.getElementById('caixaMagica');
//"Escutando os eventos realizados com o elemento da DOM"
caixaMagica.addEventListener("mouseenter", entradaMouse);
caixaMagica.addEventListener("mouseout", saidaMouse);
caixaMagica.addEventListener("click", clicar);

// Criando uma função
function entradaMouse(){
    caixaMagica.innerText = "Olá, Gabriela! ;)";
    caixaMagica.style.backgroundColor = 'blue'
}

function saidaMouse(){
    caixaMagica.innerText = "Tchau, até breve! ;(";
    caixaMagica.style.backgroundColor = 'red';
}

function clicar(){
    caixaMagica.innerText = "Você clicou!";
    caixaMagica.style.backgroundColor = 'purple';
}