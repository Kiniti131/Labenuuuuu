const cursos = ["HTML e CSS", "JavaScript", "APIs REST"];

const turmas = ["A", "B1", "B2", "C1", "C2"];

const estudantes = ["João", "Ana", "Cris","Gustavo","Bruno"];

const turmaA = [
    {
        turma:'A',
        curso:'HTML e CSS',
        inicio:'01/01/2023',
        termino:'01/06/2023',
        numeroDeAlunos:50,
        periodo:'integral',
        concluida:false
    }  
];

const turmaB = [
        {
        turma:'B1',
        curso:'JavaScript',
        inicio:'01/06/2023',
        termino:'01/06/2024',
        numeroDeAlunos:20,
        periodo:'integral',
        concluida:false
         },
        {
        turma:'B2',
        curso:'JavaScript',
        inicio:'01/01/2023',
        termino:'01/01/2024',
        numeroDeAlunos:85,
        periodo:'integral',
        concluida:false
        }
]

const turmaC = [
    {
        turma:'C2',
        curso:'APIs REST',
        inicio:'01/06/2023',
        termino:'01/03/2024',
        numeroDeAlunos:100,
        periodo:'integral',
        concluida:false
    },
    
    {
        turma:'C2',
        curso:'APIs REST',
        inicio:'01/01/2023',
        termino:'01/09/2023',
        numeroDeAlunos:150,
        periodo:'integral',
        concluida:false
    }
]





const meusCursos = [
    {nome:"HTML e CSS",
    turma:turmaA,
    descricao:'Aprenda desde HTML e CSS até o desenvolvimento de uma aplicação web.',
    duracaoEmMeses:6,
    preco:24000},

    {nome:'Java Script',
    turma:turmaB,
    descricao:'Da programação funcional até os recursos avançados do JavaScript ES6 e do TypeScript',
    duracaoEmMeses:12,
    preco:48000},
    
    {nome:'APIs REST',
    turma:turmaC,
    descricao:'Crie do zero uma API Rest em Java com Spring Boot, desenvolva CRUDs utilizando o banco de dados MySQL, utilize o Flyway como ferramenta de Migrations da API, realize validações utilizando o Bean Validation e realize paginação dos dados da API',
    duracao:9,
    preco:125000}
]


const joao = {
    nome: "João Almeida",
    idade: 33,
    curso:"Java Script",
    turma:turmaB[0],
    pagamento:'12x de 4000 sem juros'
}
const ana = {
    nome: "Ana Paula",
    idade: 19,
    curso:"HTML e CSS",
    turma:turmaA[0],
    pagamento:'à vista em dinheiro'
}
const cris = {
    nome: "Cris Rocha",
    idade: 22,
    curso:"Java Script",
    turma:turmaB[1],
    pagamento:'24x 1583,34 com Desconto de 10000'
}
const alunos = [joao, ana,cris]


