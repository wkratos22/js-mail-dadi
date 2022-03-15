// DICHIARAZIONE VARIABILI 
let num1
let num2

// NUMERI RANDOMICI DEL DADO
function lancioDado() {
    num1 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dado1").innerHTML = num1;
    num2 = Math.floor(Math.random() * 6 + 1);
    document.getElementById("dado2").innerHTML = num2;

    // COMPARAZIONE DEL RISULTATO
    if( num1 > num2 ){
        alert("Hai vinto!");
    } else if (num1 < num2) {
        alert("Hai perso!");
    } else {
        alert("Pareggio!");
    }
}




