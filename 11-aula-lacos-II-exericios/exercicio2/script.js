let inputUser = +prompt('numero');
let resultado = "";
let tabuada = [0,1,2,3,4,5,6,7,8,9,10]
for (let i of tabuada){
    let mult = inputUser * i 
    resultado += `${inputUser} x ${i} = ${mult}\n`
}
console.log(resultado)