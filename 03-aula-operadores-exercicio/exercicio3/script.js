console.log(5 > 20 && 20 < 2);
console.log(5 == 5 || "5");
console.log(!(20 > 50));
console.log(!(20 > 50 || 50 > 70));

const salario = 2000;
let c1 = 5784.5;
let c2 = 3418.41;
let c3 = 4124.1;
let c4 = 1874;
let c5 = 7000;
let c6 = 9450;
const creche = 45 * 2;

console.log("comissão de janeiro", c1 * (0.1).toFixed(2));
console.log("desconto do inss de janeiro", (salario + c1 * 0.1) * 0.05) -
  (salario + c1 * 0.1).toFixed(2);
desconto6Meses = ((+c1 + c2 + c3 + c4 + c5 + c6) * 0.1 + salario * 6) * 0.05;
salario6Meses = (+c1 + c2 + c3 + c4 + c5 + c6) * 0.1 + salario * 6;
console.log(
  "salario dos 6 meses com descontos e comissões",
  (salario6Meses - desconto6Meses).toFixed(2)
);
salario6MesesComDesconto = salario6Meses - desconto6Meses;

console.log(
  `A média salarial dos 6 meses com descontos, comissões e auxilio é:`,
  ((salario6MesesComDesconto + creche * 6) / 6).toFixed(2)
);
