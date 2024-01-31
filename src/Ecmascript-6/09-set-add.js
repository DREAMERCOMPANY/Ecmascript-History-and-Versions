//Utilizando Set-Add
const list = new Set()
list.add('Item 1').add('Item 2')
console.log(list)


//Eliminar elementos duplicados de un Array.
 const repeatArr = [1,1,1,12,12,30,20,50]
const nonRepeat = [... new Set(repeatArr)]
const result = {nonRepeat}
console.log(result)

//Usando algunos metodos del objeto Set
const arr = new Set([1,2,4,5])
console.log(arr)
console.log(arr.entries())
