//Arrays destructuring
let animals = ['Lion', 'Tiger']
let [a,b] = animals
console.log(a,b)

//Objects destructuring
let student = {name: 'Jhon', age: 23}
let {name , age} = student
console.log(name , age)

//Spread Operator

let person = {name : 'Romero', age: 15 , city: 'Bogota'}
let country = 'COL'
let data = {id:1, ...person , country}
console.log(data)

//rest operator



function sumNums(num , pos, ...values ){
    console.log(values)
    console.log(num + values[pos])
    return num + values[0]
}

sumNums(1,2, 1,2,3,4,5,6,7,8,9,10)

const subjects = ['Math', 'English']
const topics = ['Calculo', 'Fisica']

const objStudent = {
    name : 'Jhon',
    courses : [...subjects] ,
    subjects : [...topics]
}

for(item in objStudent){
    if(item === 'courses'){
        objStudent[item].push('French')
    }

    console.log(objStudent[item])
}

//Literal Objects

function people(name, age, country, pId){

    console.log({
        name, 
        age,
        country,
        id: pId
    })

   

}

people('Jhon', 22, 'COL', 1)

//Promises

const promise = ()=>{
    return new Promise((resolve, reject) =>{
        if(false){
            resolve('Test Passed')
        }else{
            reject('Test did not Passed :(')
        }
    })
}

promise().then(res => console.log(res)).catch(error => console.log(error))






