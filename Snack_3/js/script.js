// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const firstArray = [2, 3, 55, 54, 67, 77, 89, 51, 21];

const secondArray = [33, 2, 55, 7, 5];

while (firstArray.length !== secondArray.length) {
    let numberToAdd = Math.floor(Math.random() * 100);
    secondArray.push(numberToAdd);
}

console.log(firstArray, secondArray);