const ids = {'JUANITA': '01', 'Alejo': '02', 'Camilo': '03', 'David': '04' }
const valuesId = Object.values(ids)
const keysId = Object.keys(ids)
const lowerKeys = keysId.map(item => item.toLowerCase())

console.log({
    valuesId,
    keysId,
    lowerKeys
})

