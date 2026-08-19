//JVASCRIPT

//Slecionando pela tag
const p0 = window.document.getElementsByTagName('p')[0]
//Alterando as carcteristicas do elemento
p0.style.color = 'yellow';
p0.innerText = 'Mudei o texto :)'

const p1 = document.getElementsByTagName("p")[1];
p1.style.color = "orange";

const corpoSite = window.document.body

corpoSite.style.background = '#2f2f2f';

//Acessando o conteudo de um elemento DOM
document.write(`<br>No 2º paragrafo do site está escrito assim: ${p1.innerText}`)

//ID
const p3 = document.getElementById("ID");
p3.style.background = '#6e0683';
p3.innerText = "Selecionando elementos pelo ID";

//NAME
const p4 = document.getElementsByName("w");
p4.style.background ='#2216ca';
p4.innerText = "Selecionando elementos pelo NOME";

//class
const p5 = document.getElementsByClassName("hh");
p5.style.background = '#d81919';
p5.innerText = "Selecionando elementos pelo CLASSE";

//SELETOR
const p6 = document.querySelector(".ddd");
p6.style.background = '#f1db0e';
p6.innerText = "Selecionando elementos pelo SeLETOR";
