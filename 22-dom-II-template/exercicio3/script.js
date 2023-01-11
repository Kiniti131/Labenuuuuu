
const texto = document.getElementById('texto');
const paragrafo = document.getElementById('mensagem');


function checaCaps(event) {
    if (event.shiftKey) {
        paragrafo.innerHTML = "ATENÇÃO: SEGURANDO SHIFT"
    } else {
        paragrafo.innerHTML = ''
    }

}

// const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
// document.documentElement.style.setProperty('--main-bg-color', randomColor);