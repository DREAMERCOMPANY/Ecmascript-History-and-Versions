//Promesas

const promise = ()=>{
    return new Promise((resolve, reject)=>{
        if(true){
            setTimeout(()=> resolve('Hi there'), 2000)

        }else{
            reject('Test was not complete')

        }
    })
}

promise().then(res => console.log(res)).catch(err => console.log(err))