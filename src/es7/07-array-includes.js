const numbers = [1,2,5,6,10,20]
const numberIn = numbers.includes(6) // Devuelve true si esta y false si no esta
if(numberIn){
    numbers.push(8)
}
console.log(numbers)

const names = ['Juan', 'OSCAR', 'DIEGO']
const lowernames = names.map(item => item.toLowerCase()) //Pasamos los nombres a minusculas.
const isNameIn = lowernames.includes('juan') //Validamos si el nombre 'juan' esta dentro del array
console.log({
    lowernames,
    isNameIn
})