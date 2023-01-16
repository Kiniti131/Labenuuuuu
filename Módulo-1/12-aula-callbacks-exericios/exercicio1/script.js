const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

let maiusculo = { ...objeto }
function capsLock(param) {
    for (let i in param) {
        maiusculo[i] = param[i].toUpperCase()
    }
    return maiusculo

}

let corrido = ``
function textoCorrido(param) {
    for (i in param) {
        corrido += `${i}${param[i]}`
    }
    return corrido
}

function imprimi(y, x) {
    const novaImpressao = x(y)
    console.log(novaImpressao)

}
imprimi(objeto, capsLock)
imprimi(maiusculo, textoCorrido)
console.log(maiusculo)
console.log(corrido)
console.log(objeto)