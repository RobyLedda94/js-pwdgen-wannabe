alert("JavaScript pwdgen-wannabe");
// ho aggiunto la funzione alert per verificare che il file javasript fosse linkato correttamente


document.getElementById('text').innerHTML ='<strong>Inserisci Nome Cognome colore preferito e numero 23</strong>';
// oggetto document che inserisce del testo nell'elemento h2 presente nel file index.html


console.log(document.getElementById('login'));
// con questa funzione l'elemento con id login e apparso nell'ispector voce console e mostra una serie di proprietà tra cui l'id e il contenuto inserito tramite la funzione inner html


// Variabili 

let first_name = prompt('inserisci il tuo nome');
console.log(first_name)

let second_name = prompt('inserisci il tuo cognome');
console.log(second_name)

let color = prompt ('inserisci il tuo colore preferito');
console.log(color)




document.getElementById('login').innerText = `${first_name}${second_name}${color}23`;



