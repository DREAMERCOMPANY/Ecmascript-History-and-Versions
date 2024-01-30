var name = 'Jhon'
name = 'Alejo'
console.log(name)


let fruit = 'Apple'
fruit = 'orange'
console.log(fruit)

const animal = 'Lion'
animal = 'Monkey'
console.log(animal)

const fruits = ()=>{
    if(true){
        var fruitOne = 'Apple' //Function Scope
        let fruitTwo = 'Banana' //Block Scope
        const fruitThree = 'Potato' //Block Scope
    }

    console.log(fruitOne)
    console.log(fruitTwo)
    console.log(fruitThree)
}

fruits()