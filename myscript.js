/*
tools:
-variabile
-prompt
-console.loge
-getElementById
*/ 
//chiedere il nome
const your_name = prompt("Quale è il tuo nome?");
console.log(your_name);
//stampo in pagina del nome
/*const messageElement = document.getElementById('name')
messageElement.innerHTML = `Il tuo nome é ${your_name}`*/

//chiedere il cognome
const your_last_name = prompt("Quale è il tuo cognome?");
console.log(your_last_name);
//stampo in pagina del nome
/*const messageElement = document.getElementById('last-name')
messageElement.innerHTML = `Il tuo cognome é ${your_last_name}`*/

//chiedere il colore preferito
const your_favorite_color = prompt("Qual'è il tuo colore preferito?");
console.log(your_favorite_color);
//generazione della password
const messageElement = document.getElementById('genered-password');
messageElement.innerHTML = `La tua passwoed è ${your_name}${your_last_name}${your_favorite_color}23`;
