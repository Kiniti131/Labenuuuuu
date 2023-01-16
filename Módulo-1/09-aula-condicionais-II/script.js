// // usando dois if`s


// let idadeDependente = 13
// if (idadeDependente>=13) {
//     if(idadeDependente<=17) {
//         console.log('voce pode ter o cartão')
//     }else {
//         console.log('voce ja passou da idade')
//     }
// } else {
//     console.log('voce é menor de idade')
// }

// // usando operadores lógicos

// if (idadeDependente>=13 && idadeDependente<=17) {
//     console.log('voce pode ter o cartão')
// } else {
//     console.log('voce nao pode ter cartão')
// }

// //ternário

// let chuva = "chovendo"
// chuva === "chovendo" ? console.log("leva sombrinha") : console.log("pode deixar a sombrinha");

// idadeDependente>=13 && idadeDependente<=17 ? console.log("ja pode ter cartão") : console.log('consulte outras opções')


// // switch-case

// let escolhaUsuario = Number(prompt('digite um numero de 1-4'))
// let cartao
// switch(escolhaUsuario){
//     case 1:
//         cartao = ("fácil")
//     break
//     case 2:
//         cartao = ('black')
//     break
//     case 3:
//         cartao = ('platinum')
//     break
//     case 4:
//         cartao = ('master gold')
//     break
//     default:
//         console.log('escolha uma das quatros opções')
//     break
// }

// console.log("cartão", cartao)

let numeroDigitado = Number(prompt(`numero aleatorio`))
let numeroAleatorio = Math.floor(Math.random() * 30)

const numerosProibido = [6,12,18,24]
    

if(numeroDigitado%2===0) {
    if (numeroDigitado%3===0){
        console.log(`é divisivel por 2 e 3`)
    } else { 
        console.log(` é divisivel por 2 mas nao por 3`)
    }
    
}

if(numeroDigitado%2===0 && numeroDigitado%3===0) {6
    console.log(`numero divisivel por 2 e 3`)
} else {
    console.log(`numero não divisivel por 2 e 3`)
}

switch(numeroDigitado) {
    case numeroAleatorio:
        console.log(`voce conseguiu o ${numeroAleatorio} [e da sorte]`)
    break
    case 6:
        console.log("voce conseguiu! mas não é o super numero da sorte e sim pior numero dos vencedores")
    break
    case 12:
        console.log("voce conseguiu! muito bom mas podia ser melhor")
    break
    case 18:
        console.log("voce conseguiu!muito TOP gente se fosse 30 ia ser melhor")
    break
    case 24:
        console.log("voce conseguiu!Segundo melhor numero da super sorte")
    break
    default:
        console.log("voce nao achou o numero surpresa")
    break

}

console.log(numeroAleatorio)