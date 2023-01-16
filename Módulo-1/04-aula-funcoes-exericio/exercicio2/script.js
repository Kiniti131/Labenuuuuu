function num(n1,n2) {
    return `a soma do ${n1} e ${n2} = ${n1+n2};
${n1} é maior que ${n2} ? ${n1>n2};
${n1} é par? ${n1%2===0};
${n2} é par? ${n2%2===0};`
};

console.log(num(1,2));

// ----------------------------------------------------------------//

function salario(dinheiro) {
      return `seu salário com desconto do INSS é ${dinheiro*0.9}`
}

console.log(salario(1000))