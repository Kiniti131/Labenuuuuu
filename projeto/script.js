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

const movieCardTemplate = document.querySelector("[data-movie-template]")
const movieCardContainer = document.querySelector("[data-user-movie-container]")
const searchInput = document.querySelector("[data-search]")

let movies = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    movies.forEach(user => {
        const inVisible = user.nome.toLowerCase().includes(value) || user.sinopse.toLowerCase().includes(value)
        user.element.classList.toggle("hide", !inVisible)
    })
})

movies = filmes.map(user => {
    const movie = movieCardTemplate.content.cloneNode(true).children[0]
    const header = movie.querySelector("[data-header]")
    const body = movie.querySelector("[data-body]")
    header.textContent = user.nome
    body.textContent = user.sinopse
    movieCardContainer.append(movie)
    return {
        nome: user.nome,
        sinopse: user.sinopse,
        duraçãoEmMinutos: user.duraçãoEmMinutos,
        ano: user.ano, genero: user.genero,
        remake: user.remake,
        nota: user.nota,
        element: movie
    }
})

console.log(filmes[0].nome)