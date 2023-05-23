// tag
let titulo = document.getElementsByTagName('h1');

console.log(titulo[0]);

// id

let paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

// class

let item = document.getElementsByClassName('item');

console.log(item);

// querySelectorAll

let itemQueryAll = document.querySelectorAll('#lista2 .item');

console.log(itemQueryAll);

// querySelector

let itemQuerySelect = document.querySelector('#lista .item');

console.log(itemQuerySelect);