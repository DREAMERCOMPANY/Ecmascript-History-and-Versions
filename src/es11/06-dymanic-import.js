const btnAction = document.querySelector('#btn')

btnAction.addEventListener('click', async () => {
  const module = await import('./module.js')
  console.log(module)
  module.hello()
})