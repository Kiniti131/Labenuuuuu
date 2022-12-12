
// nacionalidade = (String(prompt("Digite sua nacionalidade").toLocaleLowerCase()))

// if(nacionalidade=="brasileira"){
//     console.log("brasileira");
// }else if(nacionalidade=="argentina") {
//     console.log("argentina")    
// } else if (nacionalidade=="uruguaia") {
//     console.log("uruguaiai")
// }else if (nacionalidade=="chilena") {
//     console.log("chilena")
// }else if (nacionalidade=="colombiana") {
//     console.log("colombiana")
// } else {
//     console.log("nosso programa nao reconheceu sua nacionalidade")
// }   



// const nacionalidade = (nacDigitado) => {
//     if(nacDigitado=="brasileira"){
//             console.log("brasileira");
//         }else if(nacDigitado=="argentina") {
//             console.log("argentina")    
//         } else if (nacDigitado=="uruguaia") {
//             console.log("uruguaiai")
//         }else if (nacDigitado=="chilena") {
//             console.log("chilena")
//         }else if (nacDigitado=="colombiana") {
//             console.log("colombiana")
//         } else {
//             console.log("nosso programa nao reconheceu sua nacionalidade")
//         }   

// }
// nacionalidade(prompt())

const nacionalidade = (nacDigitada) => {
    if(nacDigitada=="brasileira"||"argentina"||"uruguaia"||"chilena"||"colombiana"){
        console.log(`sua nacionalidade é ${nacDigitada}`)
    } else {
            console.log("nosso programa nao reconheceu sua nacionalidade") }   
}

nacionalidade(prompt().toLowerCase())