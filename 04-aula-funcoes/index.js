// function praticaNormal(nome) {
//   console.log(`Olá ${nome}`);
// }

// const praticaArrow = (nome) => {
//   console.log(`Oi ${nome}`);
// };

// const praticaArrowAbreviado = (nome) => console.log(`Oi ${nome}`); //caso tenha apenas uma expressão

// const pratica1ComReturn = (nome) => {
//   return `Olá ${nome}`;
// };

// praticaArrow("joao");
// praticaNormal("banana");

// praticaArrow("maca");
// praticaNormal("laranja");
// console.log(pratica1ComReturn(`ds`));


// --------------------------------------------------------------

// function pratica2(num) {
//     const verifica = num % 2 ===0;
//     const soma = num + 10;
//     const multiplica = num * num;

//     return `O numero ${num} é par ? ${verifica}
//     A soma do ${num} +10 é ${soma}
//     E multiplicado por ele mesmo é ${multiplica}`
//   };

//   const numInformado = Number(prompt("informe um número"))
//   console.log(pratica2(numInformado))
    

// ----------------------------------------------------------------

// const pratica3 = (login, senha) => {
//   const loginArmazenado = "admin"
//   const senhaArmazenado = "adminadmin"
//   login = prompt("Digite seu Login")
//   senha = prompt("Digite sua Senha")
// return login === loginArmazenado
//    &&  senha === senhaArmazenado
// }

// function pratica3Function (login,senha) {
//   const loginArmazenado = "admin"
//   const senhaArmazenado = "adminadmin"
//   login = prompt("Digite seu Login")
//   senha = prompt("Digite sua Senha")
// return login === loginArmazenado
//    &&  senha === senhaArmazenado
// }
// console.log(pratica3())
// console.log(pratica3Function())

// -------------------------------------------------------------------

// Declare uma função que:
// Receba um nome, um ano de nascimento e o ano  Atual 
// Retorne uma string com um boleano true para se o usuário for maior de idade e false para se for menor de idade. 
// A string retornada deve ter a seguinte mensagem:
// “Fulano é maior de idade? true”
// Chame a função duas vezes, passando como argumento nomes e anos de nascimento diferentes.

function pratica4(nome,anoDeNascimento,anoAtual) {
  const nomeDigitado = prompt('Seu nome');
  const anoNascimentoDigitado =Number(prompt("Ano de Nascimento"));
       
    return `${nome} é maior de idade? ${anoAtual-anoDeNascimento>=18} 
${nomeDigitado} é maior de idade? ${anoAtual-anoNascimentoDigitado>=18}`;
}
console.log(pratica4('kiniti',1995,2022));