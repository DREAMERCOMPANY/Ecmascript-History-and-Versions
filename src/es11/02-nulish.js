/*
NULISH:
    -Evita la confusion de valores falsy
    -Se simboliza con ??
*/

const num = null
console.log(num ?? 6)

//Define variable
const id = 0
//Imprime el string por que o es false.
console.log(id || 'Is not your fault')
//Imprime 0 por que id=0 y solo funcionaria con id= null || undefined.
console.log(id ?? 5)

//Example

const country = null;
const countrySelected = country ?? 'Unknown'
console.log(`The country selected is : ${countrySelected}`)