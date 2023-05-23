var listaCompra = ['arroz', 'feijão', 'macarrão', 'açucar', 'leite', 'pão', 'detergente', 'sabonete', 'sabão em pó'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

console.log(body[0]);

body[0].appendChild(listaUl);

var listaBody = document.getElementsByTagName('ul');

console.log(listaBody[0]);

for (var i = 0; i < listaCompra.length; i++) {

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(listaCompra[i]);

    liFor.append(textoLi);

    listaBody[0].appendChild(liFor);
};