const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
//a
const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

//b

pokemon1.ataque = []

//c

pokemon1.ataque.push({
    nome: `Investida`,
    dano: 40,
    tipo: `Normal`,
    precisao: 100
})

pokemon2.ataque = [{
    ...pokemon1.ataque
}]

//d

pokemon1.ataque.push({
    nome:"folhas navalha",
    dano: 45,
    tipo: "grama",
    precisao: 100
})

//e

pokemon2.ataque.push( {
    nome:'jato de água',
    dano:40,
    tipo:"Água",
    precisao:100
})

//f

console.table(pokemon1)
console.table(pokemon2)