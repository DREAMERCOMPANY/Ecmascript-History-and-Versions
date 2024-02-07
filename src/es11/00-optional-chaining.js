/*
OPTIONAL CHAINING:
    -Se utiliza con librerias como react, ayuda a que no se rompa la app
    -sirve para recorrer objetos y validar si esta la propiedad
    -Devuelve Undefined si no encuentra la propiedad dentro del objeto
*/

//Create users object
const users ={
    userOne:{
        name: 'Luz',
        age: 25
    },

    userTwo:{
        name: 'Jhon',
        age: 19
    }
}

//retorna 'Luz'
console.log(users.userOne.name)

//Devuelve undefined si no encuentra las propiedades.
console.log(users?.userFive?.holiday) 




