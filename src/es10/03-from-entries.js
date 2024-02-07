// Define a new Map named 'entries' containing key-value pairs.
const entries = new Map([['name', 'Jhon'],['Country', 'Col'],['Single', true]]);

// Use Object.fromEntries(entries) to convert the Map into an object and log it to the console.
console.log(Object.fromEntries(entries));

// Define an array of arrays named 'arrEntries' containing key-value pairs.
const arrEntries = [['name', 'Simon'], ['Country', 'Mx']];

// Use Object.fromEntries(arrEntries) to convert the array into an object and log it to the console.
console.log(Object.fromEntries(arrEntries));