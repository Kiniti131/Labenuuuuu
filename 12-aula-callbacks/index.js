const pokemon = [
    { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
    { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
    { nome: 'Charmander', tipo: 'fogo', vida: 35 },
    { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
    { nome: 'Squirtle', tipo: 'água', vida: 45 },
    { nome: 'Psyduck', tipo: 'água', vida: 25 },
  ]


  const cura = (pokemon) => {
    pokemon.vida = 100
    return pokemon
  }

  const pokemonVidaCheia = pokemon.map((pokemon)=> cura(pokemon))
  console.log(pokemon)

  const pokemonDeFogo = pokemon.filter((pokemon)=>{ return pokemon.tipo === "fogo"})
  console.log(pokemonDeFogo)



  
const arrayGlobal = [1,2,3,4,5,6,7,8,9,10]
// function multiplicarPor3(array) {
//   const novoArray = [];
//   for (element of array){
//         novoArray.push(element * 3)
//     }
//     return novoArray 
// }

// const returnPares = (array) => {
//   const novoArray = [];
//   for(element of array){
//     if(element%2 === 0) {
//       novoArray.push(element)
//     }
//   }
//   return novoArray
// }

// // console.log(multiplicarPor3(arrayGlobal))
// // console.log(returnPares(arrayGlobal))

function imprimir(array, callback) {
  const novoArray =callback(array)
  console.log(novoArray)
}

// imprimir(multiplicarPor3,arrayGlobal)




function multiplicarPor3map(array){
  const novoArray = array.map((numero)=>{
    return numero*3
  })
  return novoArray
}
multiplicarPor3map(arrayGlobal)

function numerosPares(array){
  return array.filter((numero)=>numero%2===0)
}
function numerosPares(array){
  const novoArray = array.filter((numero)=>{
    if (numero%2 === 0)
    {return novoArray}
  })
}

imprimir(arrayGlobal,multiplicarPor3map)