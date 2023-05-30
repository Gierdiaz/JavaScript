var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

var texto = document.createTextNode('Criação do paráfrago com createElement');

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector('body');

body.appendChild(novoParagrafo);

//inserindo em container

var container = document.getElementById('container');

console.log(container);

var elemento = document.createElement('span');

elemento.appendChild(document.createTextNode('Estou dentro do span'));

console.log(elemento);

body.appendChild(elemento);
