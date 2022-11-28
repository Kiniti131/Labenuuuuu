const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const num = [1,2,3,4,5,6];
const abc = ["a", "b", "c" , "d"];
const mistura = [1,"b",3,"d",true];

console.log('Imprima a quantidade de itens de cada array',num.length,abc.length,mistura.length);
console.log('imprima o primeiro item do primeiro array',num[0]);
console.log('o segundo item do segundo array',abc[1]);
console.log('e o terceiro item do terceiro array',mistura[2]);

console.log(`verifique se um item está incluído no primeiro array`,num.includes(5))
console.log('terceiro array e imprima o resultado destas verificações.A primeira impressão deve retornar um booleano true',mistura.includes(true),'\ne a segunda deve retornar um booleano false.',mistura.includes(12))