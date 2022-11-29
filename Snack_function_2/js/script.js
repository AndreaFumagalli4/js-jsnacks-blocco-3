/**
 *
 * Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
 *
 */

function getSumOfArrayElement (array) {

    let sum = 0;

    for ( let i = 0; i < array.length; i++ ) {
        
        const castedElement = parseInt( array[i], 10 );
        // Uso il ! per la negazione (se castedElement è un numero) ==> sommalo.
        if ( ! Number.isNaN(castedElement) ) { 
            sum = sum + castedElement;
        }
    }
    return sum;
}

const list = ['ciao', '22', 2, 3, 4, 5, 'Gino', '10'];

console.log(getSumOfArrayElement(list));