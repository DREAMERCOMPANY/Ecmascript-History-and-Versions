const promise1 = new Promise((resolve, reject) => reject('Promesa rechazada :('))
const promise2 = new Promise((resolve, reject) => resolve('Promesa uno resuelta :)'))
const promise3 = new Promise((resolve, reject) => resolve('Promesa dos resuelta :)'))

//Retorna la respuesta de la primera que sea satisfactoria.

Promise.any([promise1, promise2, promise3]).then(res => console.log(res))

