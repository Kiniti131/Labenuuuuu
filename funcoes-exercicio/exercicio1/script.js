function boasVindas(nome){
    return `olá ${nome}`;
};
console.log(boasVindas('Yuzo'));
//uma função quaqndo voce chama ele vai retornar o valor boasVinda com o parametro em string que decidirmos

const matematica = (num,max) => {
    mathRandom = Math.floor(Math.random() * max) + 1
    return `${num} multiplicado por ${mathRandom} é igual a ${num*mathRandom}`
};
console.log(matematica(10,10));
//uma constante matematica com parametros num,max. ele pega o numero e multiplica por um numero aleatorio do que a gente limita no max 0 - max