//Muchas veces la informacion viene de una API o de un formulario.

const str = 'Javascritp is the best programming language'
const newStr = str.replace('Javascritp', 'Java')
console.log({
    str,
    newStr
})

const input = 'We are :) beacause we are not :( jajaja'

const output = (str) =>{
  let emojiZised = ''
  emojiZised = str.replaceAll(':)', 'Happy');
  emojiZised = emojiZised.replaceAll( ':(', 'Unhappy');
  emojiZised = emojiZised.replaceAll( 'jajaja', '.');
  return emojiZised;
}

console.log(output(input))