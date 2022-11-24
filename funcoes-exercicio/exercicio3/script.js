function plus(n1,n2){
    return n1+n2;
};

function minus(n1,n2){
    return n1-n2;
};

function divi(n1,n2){
    return n1/n2;
};

function mult(n1,n2) {
    return n1*n2;
};

let numeroDigitado1 = Number(prompt("digite o 1º numero"))
let numeroDigitado2 = Number(prompt("digite o 2º numero"))

console.log(`Os números escolhido foram ${numeroDigitado1} e ${numeroDigitado2}
A Soma deles se resulta em ${plus(numeroDigitado1,numeroDigitado2)}
A Subtração deles é igual a ${minus(numeroDigitado1,numeroDigitado2)}
A Divisão entre eles é ${divi(numeroDigitado1,numeroDigitado2)}
E a Multiplicação é ${mult(numeroDigitado1,numeroDigitado2)}`)
