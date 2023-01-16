// const num = 155 //seu numero aqui

// if (num%2 === 0) {
//     console.log('é par')
// }  else if (num%2 === 1) {
//     console.log('é impar')
// }

// function num(n1)  {
//     
// }

function num(anyNum) {
    if (anyNum % 2 == 0) {
        return ` o número ${anyNum} é par `
    } else if (anyNum % 2 == 1) {
        return ` o numero ${anyNum} é ímpar`
    } else {
        return `tem que ser um numero!!`
    }
    
}

let mathRandom =  Math.floor(Math.random() * 100) + 1
console.log(num(mathRandom))
