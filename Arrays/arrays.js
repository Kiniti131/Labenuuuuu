// const nome = "CAIO"
// const num = "15"
// const item = "Prego"

// console.log(nome.length)
// console.log(num[1])
// console.log(item.toLocaleUpperCase())

const nomes = ['jorge','bruno','zul'];
console.log(nomes)
console.table(nomes)

const num = [10, 5, 12,33];

console.table(num)
const teste = 'bala'
const numEstring = ['jorges',20,true,teste,2 ]

const amazonia = 'bala'

console.log("array item 0 o length dele é:",numEstring[3].length)
console.log('o array possue o item teste?',numEstring.includes('bala'))
console.log('o array possue o item amazonio?',numEstring.includes(amazonia))
console.log('achar o item e dizer sua posição',numEstring.indexOf(2));

const novidade= numEstring

novidade.push('vida')
console.log('numEstring',numEstring)
novidade.splice(3,1)

console.log('novidade',novidade) //saiu igual
    
const novidade2 = numEstring.slice()
novidade2.push(`morte`)
novidade2.splice(5,1,'ressuscitar')
novidade.splice(0,2)

console.log(`usando slice para copia`,novidade2)