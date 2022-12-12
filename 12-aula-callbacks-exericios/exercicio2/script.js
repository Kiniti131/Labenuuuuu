const randomNumber = [1, 2, 3, 4, 5, 6, 7, 8]
//                    0,1,2,3,4,5,6,7 for in
//                    1,2,3,4,5,6,7,8 for of             
let triplos
function numeroMultiplicadoPor3(randomNumber) {
    triplos = randomNumber.map((i) => {
        return i * 3
    })
    return triplos
}
let metades
function dividir(randomNumber) {
    metades = randomNumber.map((i) => {
        return i / 2
    })
    return metades
}
// console.log(numeroMultiplicadoPor3(randomNumber))
dividir(randomNumber)
numeroMultiplicadoPor3(randomNumber)
console.log(triplos)
console.log(metades)

// x,y,z