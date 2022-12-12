// const bimestre1 = [10,10,10,1];
// const bimestre2 = [9,9,9,1];
// const bimestre3 = [8,8,8,1];
// const bimestre4 = [7,7,7,1];

// const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]


// for (let i=0 ; i<notasDoAno.length ; i++){
//     let somaDasNotas= 0
//     let mediaDoBimestre = 0

//     for (let j=0 ; j<notasDoAno[i].length; j++){
//       somaDasNotas += notasDoAno[i][j];
//     }
//     console.log(` a soma das notas   do  bimestre ${i+1} é ${somaDasNotas}`)

//     mediaDoBimestre = somaDasNotas/notasDoAno[i].length

//     console.log(` a media das notas   do  bimestre ${i+1} é ${mediaDoBimestre}
//     `)
//     }   
   
// -----------------------------------------------------------------------------

// const bimestre1 = [10,10,10,1];
// const bimestre2 = [9,9,9,1];
// const bimestre3 = [8,8,8,1];
// const bimestre4 = [7,7,7,1];

// const notasDoAno = [bimestre1,bimestre2,bimestre3,bimestre4]

// for (let i in notasDoAno){
//     let somaDasNotas= 0
//     let mediaDoBimestre = 0

//     console.log(i)

//     for (let j of notasDoAno[i]){
//       console.log(j)
//       somaDasNotas += j
      
//     }
//     console.log(` a soma das notas   do  bimestre ${Number(i)+1} é ${somaDasNotas}`)

//     mediaDoBimestre = somaDasNotas/notasDoAno[i].length

//     console.log(` a media das notas   do  bimestre ${Number(i)+1} é ${mediaDoBimestre}
//     `)
//     }   

// -----------------------------------------------------------------------------------------

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]


// Use o array de filmes que esta no template

// Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String
// for (let i in filmes) {
//   let stringFilme = ""
//   console.log(i)
//   for(let j of Object.keys(filmes)){
//     console.log(j)
//     stringFilme += j + ": " +filmes[j] + ","
//     stringFilme += "\n"
//   }
//    console.log(stringFilme)
// }







// Crie um laço for dentro do primeiro, para concatenar o elenco numa String
// A saída deve se parecer com:

// “O Homem que copiava, de 2003, dirigido por Jorge Furtado”
// “Ator 1: Lázaro Ramos"
// "Ator 2: Leandra Leal"
// "Ator 3: Pedro Cardoso”
// 2. Altere o laço externo do programa anterior para que ele seja um for… in

// 3. Altere o laço interno do programa anterior para que ele seja um for… of


// for (let i=0; i<filmes.length; i++) {
//   console.log(`Título: ${filmes[i].titulo}`)
//   console.log(`Ano: ${filmes[i].ano}`)
//   console.log(`Dirigido por: ${filmes[i].diretor}`)

//     for (let j=0; j<filmes[i].elenco.length; j++){
//       console.log(`Ator${j+1}: ${filmes[i].elenco[j]}`)
//     }
//     console.log("\n")
// }

for (let i in filmes) {
  console.log(`Título: ${filmes[i].titulo}`)
  console.log(`Ano: ${filmes[i].ano}`)
  console.log(`Dirigido por: ${filmes[i].diretor}`)

    for (let j of filmes[i].elenco){
      console.log(`Ator${filmes[i].elenco.indexOf(j)+1}: ${j}`)
    }
    console.log("\n")
}


// Escreva uma função que recebe um ano de início e um ano de fim e imprime no console todas as sextas-feiras 13 entre o período. Exemplo: a entrada 2021, 2022 gera dois console.logs, 13 de agosto 2021 e 13 de maio de 2022.