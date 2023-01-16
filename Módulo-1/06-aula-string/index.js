// const nomeP = prompt('Qual seu nome?');
// const corFav = prompt('Qual sua cor preferida?');

// const fraseTemString = `a cor favorita de ${nomeP.toLocaleUpperCase()} é ${corFav}`;
// const fraseConcatenada = "a cor favorita de " + nomeP + " é " + corFav; 

// const fraseReformulada = `Nome: ${nomeP}
// Cor favorita: ${corFav}`;

// console.log(`nome possue ${nomeP.length} caracteres, ${fraseTemString} e se possue a letra "A" : ${nomeP.includes('a')}`);
// // console.log(fraseConcatenada);
// // console.log(fraseReformulada);



const emailUsuario = prompt('seu email')
const nomeUsuario = prompt('nome')

console.log(`${nomeUsuario.replaceAll('r','x')} seu email ${emailUsuario} foi cadastrado com sucesso, sr(a) ${nomeUsuario}
nome do usuario possue ${nomeUsuario.length} caracteres
${emailUsuario.includes('@')}`)