/* 
PROMISE ALL SETTLED:
    -Promise all settled funciona para todas las promesas resueltas y rechazadas.
    -Promise all solo funciona para las promesas resueltas.
*/

const promiseOne = new Promise((resolve, reject)=> resolve('Request rejected.'))
const promiseTwo = new Promise((resolve, reject)=> resolve('Request issued.'))
const promiseThree = new Promise((resolve, reject)=> resolve('Request issued.'))

Promise.allSettled([promiseOne, promiseTwo, promiseThree]).then(res => console.log(res))
Promise.all([promiseOne, promiseTwo, promiseThree]).then(res => console.log(res))

//Simular verificar stock, procesar pago, enviar correo

const verifyStock = new Promise((resolve, reject) => resolve('Item is available'))
const processPayment = new Promise((resolve, reject) => resolve('Payment processed succesfully'))
const sendEmail = new Promise((resolve, reject)=> resolve('Email sent'))

Promise.allSettled([verifyStock, processPayment ,sendEmail]).then(res => console.log( 'resultados de todas las operaciones:' , res)).catch(err => console.log('Error al ejecutar la operacion' + err))

Promise.all([verifyStock, processPayment ,sendEmail]).then(res => console.log('Todas las operaciones se completaron con exito: ', res)).catch(err => console.log('Al menos una operacion fallo' , err))



