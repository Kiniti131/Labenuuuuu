const container = document.getElementById('container');
function adicionaItem() {
    novoItem = document.createElement('article');
    novoItem.setAttribute('class', 'item')
    novoItem.setAttribute('onclick', 'removeItem(event)')
    container.insertAdjacentElement('beforeend', novoItem);
    novoItem.style.background = ("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")")
}

function removeItem(event) {
    event.target.style.background = ("rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")")
    container.removeChild(event.target)
}

