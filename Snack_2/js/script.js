// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const arrayNumbers = [];

let somma = 0;

while ( somma <= 50 ) {
    let userNumber = parseInt( prompt('Inserisci un numero minore di 50'));
    somma += userNumber;
    arrayNumbers.push(userNumber);

    if ( somma > 50 ) {
        console.log('la somma è più di 50');
    }
}

console.log(somma);
console.log(arrayNumbers);