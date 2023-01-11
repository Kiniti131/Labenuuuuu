const frutas = ["laranja", "limão", "uva"];

const fruit1 = document.getElementById("fruta-1");
const fruit2 = document.getElementById("fruta-2");
const fruit3 = document.getElementById("fruta-3");

fruit1.innerHTML = frutas[0]
fruit2.innerHTML = frutas[1]
fruit3.innerHTML = frutas[2]

// for (let i = 0; i < frutas.length; i++) {
//     document.write("<li id=frutas" + [i] + ">" + frutas[i] + "</li>");
// }

function send() {
    const novaFruta = document.getElementById("frutaNova").value;
    for (let i = 0; i = frutas.length; i++) {
        if (frutas.indexOf(novaFruta) < 0) {
            frutas.push(novaFruta);
            document.querySelector('ul').innerHTML += "<li id=frutas-" + [i] + ">" + frutas[frutas.length - 1] + "</li>"

        }
        else {
            console.log('erro')
        }


    }
}
