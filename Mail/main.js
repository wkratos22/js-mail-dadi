// ARRAY DI EMAIL
let listaEmail = ['Marco@gmail.com', 'Antonio@gmail.com', 'Luca@gmail.com'];
// INSERIMENTO DELL?EMAIL TRAMITE PROMPT
let mailInserita = prompt('Inserisci la tua E-mail:');
// PUSH DEL PROMPT NELL'ARRAY
listaEmail.push(mailInserita);
console.log(listaEmail);

let mailTrovata = false

for(let i=0; i<listaEmail.length-1; i++ ){
    if( listaEmail[i] == mailInserita ) {
    mailTrovata = true
    }
}
if( mailTrovata == true ) {
    alert("la tua e-mail è già registrata");
} else {
    alert("Iscrizione avvenuta con successo");
}
