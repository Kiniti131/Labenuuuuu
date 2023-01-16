// Aula guiada 1//
// console.log("olá, mundo");
// prompt("ja bebeu agua?");
// console.log("beba agua");
// bebam água -- comentário "//"

//aula guiada 2 //
 
const name = "Kiniti Ishimoto";
let age = 27.43;
console.log ("nome:",name,"\nidade:",age.toFixed(2)); // ".toFixed" para mostrar o decimal (2"quantidade de decimal")
                                                    // "\n" para quebra de linha
let petCheck;
// petCheck = prompt("Voce tem pet?");

petCheck = confirm("Voce tem  pet?"); // Boolean de True or False
console.log("voce tem pet?",petCheck); // imprimir se é verdadeiro ou falso

const nomeDoPet = prompt("Qual o nome do teu Pet");
console.log(nomeDoPet,",esse é o nome do seu pet :D");

console.log("seu nome é uma", typeof name,"sua idade é um",typeof age,typeof petCheck);