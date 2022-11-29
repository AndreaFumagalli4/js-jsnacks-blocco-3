/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getSumOfArrayElement (array) {
    // se gli elementi non sono un numero non li sommo
    
    let sum = 0;

    for ( let i = 0; i < array.length; i++ ) {
        if (array[i] == Number.isNaN) {
            return array;
        }
        sum += array[i];
    }
    return sum;
}

let sumArrayElement = getSumOfArrayElement(list);
console.log(sumArrayElement);