function* iterate(items){
    for(let item of items){
        yield item
    }
}

const instance = iterate(['Alejo', 'Juan' , 'Sofia', 'Simon', 'Jhoncito'])
console.log(instance.next().value)
console.log(instance.next().value)
console.log(instance.next().value)