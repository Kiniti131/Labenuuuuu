// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function compararNumeros(a, b) {
        return a - b;
    }
    return array.sort(compararNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter(array => array % 2 === 0)
    // const resultado = []
    // for (let par of array) {
    //     if (par % 2 === 0) {
    //         resultado.push(par)
    //     }
    // }
    // return resultado
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const numerosPares = array.filter(array => {
        return array % 2 === 0
    })
    const resultado = numerosPares.map((numero) => {
        return numero * numero
    })
    return resultado


}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    const maiorNumero = arrayOrdenado[arrayOrdenado.length - 1]
    return maiorNumero

}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero, maiorDivisivelPorMenor, diferenca
    if (num1 > num2) {
        maiorNumero = num1
        maiorDivisivelPorMenor = num1 % num2 === 0
        diferenca = num1 - num2
    } else {
        maiorNumero = num2
        maiorDivisivelPorMenor = num2 % num1 === 0
        diferenca = num2 - num1
    }
    const objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorDivisivelPorMenor,
        diferenca: diferenca
    }
    return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const resultado = []
    for (let i = 0; resultado.length < n; i += 2) {
        resultado.push(i)
    }
    return resultado

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC && ladoC == ladoA) {
        return `Equilátero`
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = retornaArrayOrdenado(array)
    const segundoMaiorNumero = arrayOrdenado[arrayOrdenado.length - 2]
    const segundoMenor = arrayOrdenado[1]
    return [segundoMaiorNumero, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`

}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return pessoaNova = {
        ...pessoa,
        nome: 'ANÔNIMO'
    }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    for (let i in pessoas) {
        let pessoasAutoriza = []
        if (pessoas[i].altura >= 1.5 && pessoas[i].idade > 14 && pessoas[i].idade < 60) {
            pessoasAutoriza.push
        }

    }
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}