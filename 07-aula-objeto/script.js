// const meuObjeto = {
//     chave1:12,
//     chave2:'string',
//     chave3:true,
//     chave4:[]
// }

// //Exercicio 1

// const estudante = {
//     nome: 'Vini',
//     sobrenome: 'Oliveira',
//     matricula: 32481,
//     notas: [10,8,5]
// }

// estudante.modulo = "Módulo 1";//forma 1 para adicionar um objeto
// estudante["modulo"] = "Módulo 12"; //forma 2 para adicionar um objeto

// //acessar as propriedades
// console.log("estudante", estudante)
// console.log("nome:", estudante.nome)
// console.log("Segunda nota:", estudante.notas[1])
// console.log("Módulo:", estudante.modulo)

// // criar outro objeto com base no objeto anterior;
// const novoEstudante = {
//     ...estudante,
//     nome: "AstroDev",
//     notas: [...estudante.notas, 9], //espalhamento feito no array do objeto
//     modulo: "Módulo 2"
// }
//  novoEstudante.notas.push(100) //adicionando mais um elemento ao array do objeto
// console.log("novo estudante", novoEstudante)

// //criar um array com os dois estudantes

// const estudantesLabenu = [estudante, novoEstudante];//inserindo os 2 objetos em array 

// const estudanteLabenuPush = [];//inserir no array com .push
//       estudanteLabenuPush.push(estudante);
//       estudanteLabenuPush.push(novoEstudante);

// console.log(estudantesLabenu)

// //exercicio de fixação

const carrinhoDeCompra = {
    nome:"Kin",
    formaDePagamento:['dinheiro','credito','débito'],
    endereco:'rua dos bobo numero 0',
    compras:[{
            nome:'cafe',
            preco:10.50,
            quantidade:Number(prompt('Qtd de café'))
        },{
            nome:'leite',
            preco:10.00,
            quantidade:Number(prompt('Qtd de Leite'))
         },{
            nome:'açucar',
            preco:25.00,
            quantidade: Number(prompt('Qtd de Açucar')),
         }]
    }
//Imprima a quantidade de compras que existem no carrinho;
console.log(`quantidade de café: ${carrinhoDeCompra.compras[0].quantidade}
quantidade de leite: ${carrinhoDeCompra.compras[1].quantidade}
quantidade de açucar: ${carrinhoDeCompra.compras[2].quantidade}`)

const quantidadeTotal = carrinhoDeCompra.compras[0].quantidade+carrinhoDeCompra.compras[1].quantidade+carrinhoDeCompra.compras[2].quantidade

console.log('Total de item é',quantidadeTotal)

//Crie uma cópia do objeto, chamada “carrinhoPresente”, que seja igual ao carrinho original, mas com o nome da pessoa alterado para o nome de uma pessoa que você gosta, e a forma de pagamento alterada para cartão presente

const carrinhoPresente = {
    ...carrinhoDeCompra,
    nome:'Evelyn',
    formaDePagamento:'Cartão Presente'

}

console.log(carrinhoPresente)

console.log(carrinhoDeCompra)



