/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumbers (numMin, numMax) {
    const randomNumber = Math.floor ( Math.random () * ( numMax - numMin ) + numMin );
    return randomNumber;
}

let number = getRandomNumbers (0, 100);

console.log(number);