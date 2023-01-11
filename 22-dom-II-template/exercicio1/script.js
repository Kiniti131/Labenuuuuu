const lista = document.getElementById("lista");

const newLi = document.createElement("li");
const newLiLast = document.createElement("li");

const newContentLi = document.createTextNode("Hello World.")
newLiLast.innerHTML = 'ByeWorld';

newLi.appendChild(newContentLi);

lista.insertAdjacentElement('afterbegin', newLi)
lista.insertAdjacentElement('beforeend', newLiLast)