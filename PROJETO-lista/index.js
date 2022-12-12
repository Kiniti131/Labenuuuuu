



// const cachorro = {
//     nome: 'CACHORRO',
//     nomeCientifico: 'Canis lupus familiaris',
//     tempoMedioDeVida: 12,
//     classe: 'mamiferos',
//     ambiente: 'urbano',
//     extinto: false,
// };

// const gato = {
//     nome: 'GATO',
//     nomeCientifico: 'Felis catus',
//     tempoMedioDeVida: 15,
//     classe: 'mamiferos',
//     ambiente: 'urbano',
//     extinto: false,
// };

// const coelho = {
//     nome: 'COELHO',
//     nomeCientifico: 'Lagomorpha',
//     tempoMedioDeVida: 9,
//     classe: 'mamiferos',
//     ambiente: 'Os coelhos vivem em ambientes onde há vegetação densa e que permitem que esses animais se escondam entre as plantas ou em tocas',
//     extinto: false,
// };

// const aEraDoGelo = {
//     nome: 'A ERA DO GELO',
//     sinopse: 'Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão. Agora, os dois vão enfrentar muitas aventuras até devolver o filhote de gente à sua tribo, que migrou para um novo acampamento.',
//     duraçãoEmMinutos: 142,
//     ano: 2002,
//     genero: 'comedia',
//     remake: false,
//     nota: 4.5
// };

// const aNovaOndaDoImperador = {
//     nome: 'A NOVA ONDA DO IMPERADOR',
//     sinopse: 'O jovem e arrogante Imperador Kuzco é transformado em uma lhama por sua poderosa mentora chamada Yzma. Perdido na floresta, a única chance de Kuzco recuperar seu trono é com a ajuda de Pacha, um humilde camponês. Juntos, eles precisam enfrentar a bruxa Yzma antes de concluir sua jornada.',
//     duraçãoEmMinutos: 138,
//     ano: 2000,
//     genero: 'comedia',
//     remake: false,
//     nota: 4.3
// };

// const madagascar = {
//     nome: 'MADAGASCAR',
//     sinopse: 'O leão Alex é o rei da selva urbana, a principal atração no zoológico de Nova York. Ele e seus melhores amigos - a zebra Marty, a girafa Melman e a hipopótamo fêmea Gloria - sempre viveram em cativeiro, felizes, com refeições regulares e um público para adorá-los. No entanto, Marty quer explorar o mundo e foge com a ajuda dos pinguins.',
//     duraçãoEmMinutos: 146,
//     ano: 2005,
//     genero: 'comedia',
//     remake: false,
//     nota: 4.4
// };

// const pizza = {
//     nome: 'PIZZA',
//     descricao: 'pizza deve apresentar-se macia, bem assada, suave, elástica, fácil de ser dobrada pela metade. As bordas elevadas devem ser douradas". O gosto da massa deve ser de pão bem fermentado, misturado ao sabor ácido do tomate, aroma de alho, orégano, manjericão.',
//     ingrediente: ['Farinha', 'açucar', 'sal', 'agua', 'fermento', 'molho de tomate', 'mussarela', 'tomate', 'oregano'],
//     preço: 60.00,
//     categoria: 'Fast Food',
//     vegetariano: false || true
// };

// const cachorroQuente = {
//     nome: 'CACHORRO QUENTE',
//     descricao: 'Um cachorro-quente é uma comida típica dos Estados Unidos em que se coloca salsicha dentro de um pão sovado. Nos Estados Unidos, o preparo típico do cachorro-quente é colocando a salsicha com o molho agridoce, picles à base de pepino, mostarda e ketchup.',
//     ingredientes: ['vina', 'molho de tomate', 'cebola', 'pimentao', 'alho', 'milho', 'oleo', 'cheiro verde', 'sal', 'pao', 'ketchup', 'maionese', 'mostarde'],
//     preço: 20.00,
//     categoria: 'Fast Food',
//     vegetariano: false
// };

// const canjica = {
//     nome: 'CANJICA',
//     descricao: 'Munguzá, mugunzá ou Canjica é uma iguaria doce feita de grãos de milho-branco ou amarelo levemente triturados, cozidos em um caldo contendo leite de coco ou de vaca, açúcar, canela em pó ou casca e cravo-da-índia.',
//     ingrediente: ['canjica', 'coco ralado', 'açucar', 'leite de coco', 'leite', 'pau de canela', 'cravinho', 'canela em po'],
//     preco: 20.00,
//     categoria: 'Caseiro',
//     vegetariano: true
// };

// const comida = [pizza, cachorroQuente, canjica];
// const animal = [cachorro, gato, coelho];
// const filme = [aEraDoGelo, madagascar, aNovaOndaDoImperador];

// const calculoMedioNota = `A média das notas dos filmes A era do Gelo, Madagascar e a Nova era do Imperador é: ${(aEraDoGelo.nota + aNovaOndaDoImperador.nota + madagascar.nota) / 3}`;

// console.log(calculoMedioNota);
// console.log(`Verificando se os animais cachorro,gato e coelho estão extintos: ${cachorro.extinto === gato.extinto === coelho.extinto}`);

// console.table(comida)
// console.table(animal)
// console.table(filme)


// ----------------------------------------------------------------------------------

const animais = [
    {
        nome: 'CACHORRO',
        nomeCientifico: 'Canis lupus familiaris',
        tempoMedioDeVida: 12,
        classe: 'mamiferos',
        ambiente: 'urbano',
        extinto: false,
    },
    {
        nome: 'GATO',
        nomeCientifico: 'Felis catus',
        tempoMedioDeVida: 15,
        classe: 'mamiferos',
        ambiente: 'urbano',
        extinto: false,
    },
    {
        nome: 'COELHO',
        nomeCientifico: 'Lagomorpha',
        tempoMedioDeVida: 9,
        classe: 'mamiferos',
        ambiente: 'Os coelhos vivem em ambientes onde há vegetação densa e que permitem que esses animais se escondam entre as plantas ou em tocas',
        extinto: false,
    }];

const filmes = [
    {
        nome: 'A ERA DO GELO',
        sinopse: 'Vinte mil anos atrás, num mundo coberto de gelo, o mamute Manfred e a preguiça Sid resgatam um bebê humano órfão. Agora, os dois vão enfrentar muitas aventuras até devolver o filhote de gente à sua tribo, que migrou para um novo acampamento.',
        duraçãoEmMinutos: 142,
        ano: 2002,
        genero: 'comedia',
        remake: false,
        nota: 4.5
    },
    {
        nome: 'A NOVA ONDA DO IMPERADOR',
        sinopse: 'O jovem e arrogante Imperador Kuzco é transformado em uma lhama por sua poderosa mentora chamada Yzma. Perdido na floresta, a única chance de Kuzco recuperar seu trono é com a ajuda de Pacha, um humilde camponês. Juntos, eles precisam enfrentar a bruxa Yzma antes de concluir sua jornada.',
        duraçãoEmMinutos: 138,
        ano: 2000,
        genero: 'comedia',
        remake: false,
        nota: 4.3
    },
    {
        nome: 'MADAGASCAR',
        sinopse: 'O leão Alex é o rei da selva urbana, a principal atração no zoológico de Nova York. Ele e seus melhores amigos - a zebra Marty, a girafa Melman e a hipopótamo fêmea Gloria - sempre viveram em cativeiro, felizes, com refeições regulares e um público para adorá-los. No entanto, Marty quer explorar o mundo e foge com a ajuda dos pinguins.',
        duraçãoEmMinutos: 146,
        ano: 2005,
        genero: 'comedia',
        remake: false,
        nota: 4.4
    }]

const comidas = [
    {
        nome: 'PIZZA',
        descricao: 'pizza deve apresentar-se macia, bem assada, suave, elástica, fácil de ser dobrada pela metade. As bordas elevadas devem ser douradas". O gosto da massa deve ser de pão bem fermentado, misturado ao sabor ácido do tomate, aroma de alho, orégano, manjericão.',
        ingrediente: ['Farinha', 'açucar', 'sal', 'agua', 'fermento', 'molho de tomate', 'mussarela', 'tomate', 'oregano'],
        preco: 60.00,
        categoria: 'Fast Food',
        vegetariano: false || true
    },
    {
        nome: 'CACHORRO QUENTE',
        descricao: 'Um cachorro-quente é uma comida típica dos Estados Unidos em que se coloca salsicha dentro de um pão sovado. Nos Estados Unidos, o preparo típico do cachorro-quente é colocando a salsicha com o molho agridoce, picles à base de pepino, mostarda e ketchup.',
        ingredientes: ['vina', 'molho de tomate', 'cebola', 'pimentao', 'alho', 'milho', 'oleo', 'cheiro verde', 'sal', 'pao', 'ketchup', 'maionese', 'mostarde'],
        preco: 20.00,
        categoria: 'Fast Food',
        vegetariano: false
    },
    {
        nome: 'CANJICA',
        descricao: 'Munguzá, mugunzá ou Canjica é uma iguaria doce feita de grãos de milho-branco ou amarelo levemente triturados, cozidos em um caldo contendo leite de coco ou de vaca, açúcar, canela em pó ou casca e cravo-da-índia.',
        ingrediente: ['canjica', 'coco ralado', 'açucar', 'leite de coco', 'leite', 'pau de canela', 'cravinho', 'canela em po'],
        preco: 20.00,
        categoria: 'Caseiro',
        vegetariano: true
    }]

const todosItens = [animais, filmes, comidas]

// for (i in comidas) {
//     console.table(comidas[i].preco)
// }

function buscarObjeto(arr, key) {
    return arr.filter(arr => arr.nome)

}

const achar = buscarObjeto(comidas)

console.log(achar)  