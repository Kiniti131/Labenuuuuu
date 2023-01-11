const novaFruta = document.getElementById("meu-input").value;
const lista = document.getElementById("lista").innerHTML;

function insereItem() {
    if (novaFruta == lista) {
        alert('erro')
    } else {
        const newLi = document.createElement("li");
        newLi.appendChild(novaFruta)
        lista.insertAdjacentElement('beforeend', newLi)

    }


}