function sumNums(a,b){ //Function normal
    return a + b
}

const sumNums = (a,b)=>{ //Arrow function
    return a + b
}

const sunNums = (a,b) => a + b //Arrow function con return implicito

const sumOddNumbers = (a,b)=>{
    if(a % 2 ===0 && b % 2 ===0 ){
        console.log( a + b)
    } else{
        throw new Error('Numbers are not Odd')
    }
}

sumOddNumbers(2,6)
sumOddNumbers(1,5)
