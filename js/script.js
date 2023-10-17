const number = 21;

let nome = prompt('Quale è il tuo nome');
console.log(nome);
let cognome = prompt('Quale è il tuo cognome');
console.log(cognome);
let colorePreferito = prompt('Qual è il tuo colore preferito');
console.log(colorePreferito)
let password = nome + cognome + colorePreferito + number;
console.log (password, typeof password );
document.getElementById("password").innerHTML = password;


