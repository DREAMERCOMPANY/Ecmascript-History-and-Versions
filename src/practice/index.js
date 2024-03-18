/* //!VARIABLES: VAR, LET, Y CONST
// Declaración y asignación de una variable con var
var name = 'Jhon';
name = 'Juanita'; // Se puede reasignar
console.log(name);

// Declaración y asignación de una variable con let
let edad = 20;
edad = 21; // Se puede reasignar
console.log(edad);

// Declaración de una variable constante
const gender = 'male';
//gender = 'female'; // Esto causará un error, no se puede reasignar una constante
console.log(gender);

// let y const tienen alcance de bloque, mientras que var tiene alcance global

const names = () => {
    if (true) {
        var nameOne = 'Jhon'; // Alcance de scope
        let nameTwo = 'Paola'; // Alcance de bloque
        const nameThree = 'Shakira'; // Alcance de bloque
    }

    console.log(nameOne); // Se puede acceder porque var tiene alcance de función
    console.log(nameTwo); // Esto causaría un error, nameTwo está fuera de alcance
    console.log(nameThree); // Esto causaría un error, nameThree está fuera de alcance
}

// Llamada a la función names
names(); */

/* //!ARROW FUNCTIONS 
// Definición de una función tradicional para calcular el cuadrado de un número
function squareNum(num) {
    return num * num;
}

// Definición de una arrow function para calcular el cuadrado de un número
const squareNum = (num) => {
    return num * num;
};

// Definición de una arrow function simplificada para calcular el cuadrado de un número
const squareNum = num => console.log(Math.pow(num, 2)); // Imprime el resultado en consola
squareNum(5); */

 /* //!STRINGS, TEMPLATE LITERALS

let name = ''
let lastName = 'Romero'
console.log('Hello' + ' ' + name + ' ' + lastName + '!');
console.log(`Hello ${name} ${lastName}! `) //Template Strings



// todo: EXAMPLE
const transformString = (str) => {
    if(str.lenght !==0 ){
        const arrayStr = str.split('')
        console.log(arrayStr);
        setTimeout(()=>{
            console.log(arrayStr.join(''))
        }, 2000)
    }else{
        throw new Error('Error Ocurred: string does not contain anything')
    }

}

transformString(name) 
 */

/* //! PARAMETROS POR DEFECTO
// Función generateNames con parámetros por defecto
function generateNames(name, age, country) {
    // Si los parámetros no se proporcionan, se asignan valores por defecto
    var name = name || 'Alejo'; // Si name es falsy, se asigna 'Alejo'
    var age = age || 24; // Si age es falsy, se asigna 24
    var country = country || 'Col'; // Si country es falsy, se asigna 'Col'
    console.log(name, age, country);
}

// Llamada a generateNames sin proporcionar argumentos
generateNames();

// Función generateNamestwo con parámetros por defecto utilizando la sintaxis de ES6
function generateNamestwo(name = 'Jhon', age = 25, country = 'CL') {
    console.log(name, age, country);
}

// Llamada a generateNamestwo sin proporcionar argumentos
generateNamestwo();

//todo: crear una funcion que asigne nombres a animales

const assignAnimal = (name = undefined, color = undefined) => console.log({name , color})
assignAnimal('Lion', 'red')
assignAnimal()
 */

/* //! ASIGNACION DE DESESTRUCTURACION

//Destructuracion en arrays

const vegetables = ['Carrior','lettuce','potatoe']
const [a,b,c] = vegetables
console.log(a,b,c)

//Destructuracion con objetos
let person = {name:'Oscar', age: 22}
let {name , age} = person
console.log(name, age)

//todo: Crear una funcion que reciba un objeto y devuelva las propiedades de ese objeto.

const Objeto = {
    prop1 : 'Valor1',
    prop2 : 'Valor2',
    prop3 : 'Valor3',
}
    
function printObject(obj) {
    const params = Object.keys(obj).length;
    if (params > 2) { // Si el objeto tiene más de dos propiedades
        let {prop1, prop2, ...rest} = obj;
        console.log(prop1, prop2);
        for (let key in rest) {
            console.log(`${rest[key]}`);
        }
    } else {
        let {prop1, prop2} = obj;
        console.log(prop1, prop2)
    }
}

printObject(Objeto) */

/* //!SPREAD OPERATOR

//Using Arrays
let names = ['Juan', 'sofia', 'oscar']
let me = 'Jhon'
let dataArr = [...names , me]
console.log(dataArr)

//Using Objects
let user = {name:'Jhoncito', single:true, gender: 'Not defined'}
let country = 'Col'
let dataObj = {id:1 , ...user, country}
console.log(dataObj)

//Rest Operator

function sumNums(num, ...nums){
    console.log(nums)
    console.log(num + nums[0])
}

sumNums(1,2,3,4,5,6,7,8,9,10)

//todo: Create a function that returns

const nums = [112,23,4,5,6,8,9]

function returnNums(...nums){
    for(num of nums){
        for(realnum of num){
           console.log(realnum) 
        }
        
    }
}

returnNums(nums)
 */

/* //!OBJECT LITERALS

function newUser({name, age, country, uId}){
    console.log({
        name,
        age,
        country,
        id: uId
    });
}

newUser({name:'Jhon', country:'col', age:23}) //RORO, recibe un objeto retorna un objeto

//todo: Creating an object which return object values

UserOne = {
    name: 'Jhon',
    age: 'Alejo'
}
const returnObjectValues = (param) =>{
    if(typeof(param)=== 'object'){
        const values = Object.values(param)
        console.log(values)   
    }
}

returnObjectValues(UserOne) */

/* //!PROMESAS

//Son una forma de trabajar el asincronismo, callbacks, async, await.
//Los call back es una funcion que recibe como parametro otra funcion

// Definimos un array de objetos 'data'
const data = [{id:1, title: 'The lions', year: 2023},{id:2, title: 'Superman', year: 2019},{id:3, title: 'Titanic', year: 2000}]
// Podemos utilizar data vacía para probar los casos

// Definimos una función llamada 'getData' que devuelve una promesa
const getData = ()=>{
   return new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(data) // Resolvemos la promesa con 'data' después de un tiempo
    }, 2500)

    if(data.length === 0) {
        reject(new Error('Object is null')); // Rechazamos la promesa si 'data' está vacía
    }
   })
}

// Función asincrónica 'showData' para mostrar la información de 'data'
async function showData(){
    try {
        const dataMerge = await getData() // Esperamos a que la promesa se resuelva y obtenemos los datos
        console.log(dataMerge) // Mostramos los datos obtenidos
    } catch (error) {
        console.log(error.message) // Manejamos cualquier error que pueda ocurrir
    }
}

// Llamamos a la función asincrónica 'showData'
showData()

// Llamamos a la función 'getData' usando promesas y mostramos los resultados
getData().then((resolve)=> console.log(resolve)).catch((err)=>console.log(err.message))

// Función que devuelve una promesa, resuelve con 'Hey!' si la condición es verdadera
function returnPromise(){
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!')
        }else{
            reject('OPS')
        }
    })
}

// Ejecutamos la promesa y manejamos el resultado
returnPromise().then(res =>console.log(res)).catch(err => console.log(err))
 */

/* //!CLASES
//Las clases se refieren a moldes que se crean, es una mejora sintactica para hacer mas amigable con la herencia
//Las clases estan basadas en prototipos.
//El constructor inicializa los elementos cuando se instancia la clase
//This hace referencia al elemento padre que lo contiene


// Definición de la clase "User" que representa a un usuario
class User {
    // Constructor que inicializa las propiedades del usuario
    constructor({name, age, id, gender, country}){
        this.name = name;
        this.age = age;
        this.id = id;
        this._gender = gender; // Se usa _gender para indicar que es una convención de propiedad privada
        this.country = country;
    }

    // Método para que el usuario hable
    speak(){
        return 'Hello'; // Devuelve un saludo básico
    }

    // Método que devuelve un saludo completo del usuario
    greeting(){
        return `${this.speak()}, My name is ${this.name} and I'm from ${this.country}`;
    }

    // Getter para obtener el género del usuario
    get gender(){
        return this._gender;
    }

    // Setter para actualizar el género del usuario
    set gender(data){
        this._gender = data;
    }
}

// Creación de una instancia de la clase User con información específica
const alejo = new User({name:'Jhon', age: 23 , gender: 'Male', country:'Col'});

// Ejemplos de uso de la instancia alejo y sus métodos y propiedades
console.log(alejo.speak()); // Imprime el saludo del usuario
console.log(alejo.greeting()); // Imprime un saludo completo del usuario
console.log(alejo.gender); // Imprime el género del usuario
alejo.gender = 'Female'; // Cambia el género del usuario
console.log(alejo.gender); // Imprime el nuevo género del usuario
console.log(alejo); // Imprime el objeto completo del usuario */

/* //!GENERATOR

//Son un tipo especial de funcion que nos va a retornar una serie de valores segun el algoritmo definido
//Recuerda su estado

function* iterator(arr){
    for(let value of arr){
        yield value
    }
}

const interaction = iterator([1,2,3,4,5,6,7,8])
console.log(interaction.next().value) //recuerda el estado
console.log(interaction.next().value)
console.log(interaction.next().value)


function* getId(){
    let id = 0

    while(true){
        id++
        yield id;
    }
}

const ids = getId()
console.log(ids.next().value)
console.log(ids.next().value)
console.log(ids.next().value) */

/* //!SET ADD
//Almacenar colecciones de valores unicos

//Creando un set y agregando elementos.
const list = new Set()
list.add(1).add(2).add(3).add(4)
console.log(list)


//Eliminando elementos duplicados de un array
const repeatNums = [1,1,1,2,3,4,5,5,10,10]

const noRepeat = [...new Set(repeatNums)]
console.log({
    repeatNums,
    noRepeat
})
 */

/* //!EXPONENTIATION OPERATOR Y ARRAY.INCLUDES.

// Exponential operator
let a = 5
console.log(a ** 3) // Imprime el resultado de elevar 5 al cubo (5^3), que es 125

// Array includes

// Definimos un array llamado 'list' con nombres
const list = ['Jhon', 'Oscar', 'david', 'Juan']

// Definimos una variable llamada 'nameSearch' y le asignamos el valor 'David' que queremos buscar en el array
const nameSearch = 'David'

// Utilizamos el método map() para convertir cada nombre del array a minúsculas y luego comprobamos si el nombre buscado (en minúsculas) está presente en el array
// El resultado se almacena en la variable 'isNameIn'
const isNameIn = list.map(name => name.toLowerCase()).includes(nameSearch.toLowerCase())

// Imprimimos un objeto que contiene el array 'list', el nombre buscado 'nameSearch' y un booleano que indica si el nombre buscado está en el array o no
console.log({
    list, // Imprime el array original
    nameSearch, // Imprime el nombre que estamos buscando
    isNameIn // Imprime true si el nombre buscado está en el array, de lo contrario, imprime false
})
 */

/* //!OBJECT.ENTRIES , OBJECT.VALUES, OBJECT.KEYS

//Object.entries, devuelve una matrix de pares propios

// Definimos un objeto 'countries' que contiene las abreviaturas de algunos países y sus nombres.
const countries = {'MX': 'Mexico','COL': 'Colombia', 'CL': 'Chile', 'ARG': 'Argentina'}

// Extraemos las claves del objeto 'countries' y las almacenamos en la variable 'keys'.
const keys = Object.keys(countries)

// Extraemos los valores del objeto 'countries' y los almacenamos en la variable 'values'.
const values = Object.values(countries)

// Obtenemos una matriz de pares [clave, valor] del objeto 'countries' y la almacenamos en la variable 'entries'.
const entries = Object.entries(countries)

// Creamos un nuevo objeto 'result' que contiene las variables 'keys', 'values' y 'entries' como propiedades.
const result = {keys,values, entries}

// Imprimimos el objeto 'result' en la consola.
console.log(result); */

/* //!STRING PADDING Y TRAILING COMMAS.

// Creamos una variable 'str' y le asignamos el valor 'Hello'.
const str = 'Hello'

// Utilizamos el método 'padStart()' para añadir caracteres al inicio de la cadena 'str' hasta que la longitud total sea 6. Usamos '_' como carácter de relleno.
console.log(str.padStart(6,'_'))

// Utilizamos el método 'padEnd()' para añadir caracteres al final de la cadena 'str' hasta que la longitud total sea 6. Usamos '_' como carácter de relleno.
console.log(str.padEnd(6,'_'))

// trailing commas: las comas adicionales al final de una lista de elementos en un array son conocidas como "trailing commas".
// Creamos un array 'arr' que contiene algunos elementos seguidos de trailing commas.
const arr = [1,2,3,4, , , , 5]

// Imprimimos el array 'arr' en la consola.
console.log(arr)

// Imprimimos la longitud del array 'arr' en la consola. La longitud incluye todos los elementos y las comas adicionales al final.
console.log(arr.length) */

/* //!FUNCIONES ASINCRONAS.

//Async, Await
//Sincronia

const fnAsync = ()=>{
    return new Promise((resolve, reject)=>{
        (true) 
            ? setTimeout(() => resolve('Promise resolved!'), 2000 )
            : reject(new Error('Promise Failed'))
    })
}

const anotherFn =  async () => {
    const response = await fnAsync()
    console.log(response);
    console.log('Hello!');
}

console.log('Before');
anotherFn()
console.log('After');

setTimeout((a, b) => {
    console.log(a + b);
}, 2000, 3, 5); */

/* //!EXPRESIONES REGULARES

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const matchers = regex.exec('2022-01-01')
console.table(matchers)

//!REST OPERATOR IN OBJECTS
const user = {username: 'Dreamer', age: 23, country: 'Col'}
const {username , ...rest} = user
console.log(username);
console.log(rest); */

/* //!PROMISE FINALLY

const asyncFn = () =>{
    return new Promise((resolve, reject) => {
        (false)
        ? resolve('Promise passed')
        : reject('Promise rejected')
    })
}

asyncFn()
.then(res => console.log(res))
.catch(err => console.log(err))
.finally(() => console.log('Finally')); */

/* //!ASYNC GENERATORS

async function* generator(){
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const another = generator()

another.next().then(res => console.log(res.value));
another.next().then(res => console.log(res.value));
another.next().then(res => console.log(res.value));
console.log('Hello!'); */

/* //!ASYNC CICLOS

async function arrayOfNames(names){
    for await(let value of names){
        console.log(value);
    }
}

const names = arrayOfNames(['Juan', 'Camilo', 'Oscar'])
console.log('After'); */

/* //!FLAT MAP
//Nos devuelve una matriz aplanada

//FLAT
const array = [1,2,3,4,5,6 , [7,8,9, [10,11,12,13]]]
const flatArr = array.flat(3)
console.log(flatArr);
//[1, 2, 3,  4,  5,  6, 7, 8, 9, 10, 11, 12, 13]


//FLATMAP
const arrayTwo = [1,2,3,4 , [5,6]]
const arrayTwoModify = arrayTwo.flatMap(v => v*2)
console.log(arrayTwoModify);
//[ 2, 4, 6, 8, 10, 12 ]

//FLAT + MAP

const elements = [1,2,3,4,5, [6,7,8,9,[10,11,12]]]
const evenEle = elements.flat(Infinity).filter(el => el % 2 == 0).map(el => el *2)
console.log(evenEle); 
//[4, 8, 12, 16, 20, 24 ]

//TRIMSTART TRIMEND
const hello = '    Hello World!      '
console.log(hello.trimStart()); //elimina los espacios del principio
console.log(hello.trimEnd()); //Elimina los espacios del final */

/* //!TRY CATCH & FROM ENTRIES 

//Try & Catch
try {
    hello()
    
} catch (error) {
    console.log(error.message);
    
}

try{
    anotherFn()

}catch(err){
    console.log(`An error ocurred: ${err.message}`)
}

//From entries

const entries = new Map([['Name', 'Jhon'], ['Age', 23]])
const entriesObject = Object.fromEntries(entries)
console.log({entries, entriesObject});

const mapita = new Map()

mapita.set('Name', 'Jhon')
mapita.set('Country', 'Col')
mapita.set('Courses', ['Python', 'Js', 'React'])

console.log(mapita.get('Courses'));
console.log(mapita);

let obj = {};

for (let item of mapita) {
    obj[item[0]] = item[1]; // Asignar la clave-valor directamente al objeto
}

console.log({info: obj}); */

/* //!OPTIONAL CHAINING

//Se utiliza para acceder a elementos dentro de objetos validando si existen o no

const users = {
    Jhon: {
        'country': 'Col'
    },

    Oscar:{
        'country': 'Mx'
    }
}

console.log(users.Jhon.country);
console.log(users.bebe?.age); */

/* //!BIG INT & NULISH ??

const aBigNumber = 589565624789555999999996n
const anotherBigNum = BigInt(589565624789555999999996)
console.log({
    aBigNumber,
    anotherBigNum
});

const id = 5
const orId = id || 'sin id'
const nullishId = id ?? 5

console.log({
    orId,
    nullishId
}); */

/* //!PROMISE AL SETTLED

const promiseOne = new Promise((resolve, reject) => {
    resolve('resolved one') 
})
const promiseTwo = new Promise((resolve, reject) => resolve('Rejected two'))
const promiseThree = new Promise((resolve, reject)=> resolve('Resolved three'))

//Promise.allsettled imprime los valores sin importar si las promesas re resolvieron o no
Promise.allSettled([promiseOne,promiseTwo,promiseThree]).then(res => console.log(res));
//Promise.all solo imprime el valor de resolve si la promesa se resolvio
Promise.all([promiseOne,promiseTwo,promiseThree]).then(res => console.log(res)); */

/* //!GLOBAL THIS & MATCH ALL

//GLOBAL THIS
console.log(window); //Navegador
console.log(global); //Node
console.log(self); //webworker
console.log(globalThis);

//MATCH ALL

const regex = /\b(Apple)+\b/g
const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

for(const match of fruit.matchAll(regex)){
    console.log(match);
} */

/* //!NUMERIC SEPARATOR & REPLACE ALL

//Los separadores numericos sirven para separar los numeros

const value = 100_000_000;
console.log(value);

//Replace sirve para remplazar un valor del str por otro valor

const string = 'Javascript es un maravilloso lenguaje de programacion'
const modifyStr = string.replace('Javascript', 'C++')
console.log(
    {string,
    modifyStr}
    );

//Replace All

const str = 'Hola :), como estas? :clap, no olvides :) :clap'
const newStr = str.replaceAll(':)', '🙃').replaceAll(':clap', '👏🏼');
console.log({
    str,
    newStr
}); */

/* //! PROMISE ANY && METODOS PRIVADOS

//Promise any captura la respuesta de la primer promesa que se cumpla

const promiseOne = new Promise( (resolve, reject) => reject('Promise one rejected'))
const promiseTwo = new Promise( (resolve, reject) => resolve('Promise two resolved'))
const promiseThree = new Promise( (resolve, reject) => resolve('Promise three resolved'))

Promise.any([promiseOne,promiseTwo,promiseThree]).then(res => console.log(res));

//Metodos privados en clases

class Student{
    constructor({name, age, country, subjects = []}){
        this.name = name;
        this._age = age;
        this.country = country,
        this.subjects = subjects

    }

    read(){
        console.log(`Student ${this.name} is able to read`);

    }

    #approveSubject() {
        if (this.subjects.length > 0) {
            console.log(`Student ${this.name} has approved ${this.subjects[0]} successfully`);
        } else {
            console.log(`Student ${this.name} has no subjects`);
        }
    }
    

    get #age(){
        return this._age
    }

    set #age(newAge){
        this._age = newAge
    }
}

const Jhon = new Student({name:'Jhon', age:23, subjects: ['Maths', 'Social']})
Jhon.read() */

//! AT

//Se utiliza para acceder a los elementos de un array
const nums = [1,2,3,4,5,6]

//Accediendo al ultimo elemento con At
console.log(nums[nums.length - 1]);
console.log(nums.at(-1));


















