const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

//a

console.log(`questão A : ${filme.elenco[0]}`)

//b
const elencosss = filme.elenco.length
console.log('questão B : '+filme.elenco[elencosss-1])

//c

console.log("questão C :",filme.transmissoesHoje)

//d

console.log('questão D :',filme.transmissoesHoje[1].horario)