//criando elemento
var elemento = document.createElement('h3');

elemento.classList = 'testando-classe';

var texto = document.createTextNode('Texto h3');

elemento.appendChild(texto)

console.log(elemento);

//selecionar o elemento que quero trocar
var title = document.querySelector('#title');

console.log(title);

//selecionar o pai do elemento.
var pai = title.parentNode;

//trocar os elementos
pai.replaceChild(elemento, title)