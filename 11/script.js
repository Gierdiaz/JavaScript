//inserindo elementos(appendChild e insertBefore)

//criar elemento

var elemento = document.createElement('div');

elemento.classList = 'div-criada';

console.log(elemento);

var container = document.querySelector("#container");

container.appendChild(elemento);