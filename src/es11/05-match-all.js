//con regex se puede validar la informacion
//Validar que en inout el correo se escriba de manera correcto
//expresiones regulares

const regex = /\b(Apple)+\b/g;
const fruits = 'Apple, Banana, Kiwi, Apple, Apple, Apple';

for(const match of fruits.matchAll(regex)){
  console.log(match)
}
