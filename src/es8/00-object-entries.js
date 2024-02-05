//Object.Entries
const animals = {'L': 'Lion', 'A': 'Araña', 'B': 'Burro', 'N': 'Nutria',}
const entries = Object.entries(animals)
console.log(entries)

let animalKeys = [];
let animalValues =[];

for(let [key, value] of entries){
    animalKeys.push(key)
    animalValues.push(value)
   
}

console.log(animalKeys)
console.log(animalValues)

