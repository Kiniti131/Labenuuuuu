//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${"BOAS VINDAS, mas não deixe o gato sair".toLocaleUpperCase()} `
let frase2 = frase.replace('verde','rosa')
let frase3 = frase2.replace('azul','laranja')
console.log(`${frase3.includes(`rosa`,`verde`)} 
${frase3}`)