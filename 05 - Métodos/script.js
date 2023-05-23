// ---------- métodos de números

//parseFloat
console.log(Number.parseFloat('12.999'));

//parseInt
console.log(Number.parseInt('12000'));
console.log(Number.parseInt('14.58'));

//toFixed casa decimal
console.log(25.878.toFixed(1));

// ---------- métodos de strings

//length
var nome = 'Allison';
console.log(nome.length);
console.log(nome[1]);

//indexOf
var frase = 'Um belo dia para sair na rua';
console.log(frase.indexOf('rua'));

//slice
var rua = frase.slice(25,28);
console.log(rua);

//replace 
var novaFrase = frase.replace('rua', 'estrada');
console.log(novaFrase);

//toUpperCase
var phrase = 'Esta É A Frase Que Vamos Manipular';
console.log(phrase.toUpperCase());

var phrase = 'Esta é a frase que vamos manipular';
console.log(phrase.toLowerCase());

//trim remover espaços
var espaco = '          espaço vazio       ';
console.log(espaco.trim());

//split mandar como array
var tags = 'php, javascript, golang, kotlin, julia, ruby, R';
console.log(tags.split(' '));

// ---------- métodos de arrays

//length
var array1 = [1,2,3,4,5];
console.log(array1.length)

//push para adicionar qualquer coisa no array
console.log(array1.push(6,7,8,9,10));
console.log(array1);

//pop remove o último elemento do array
console.log(array1.pop());
console.log(array1);

//unshit adicionar no começo da array
console.log(array1.unshift(0));
console.log(array1);

//shift remove no começo do array
console.log(array1.shift())
console.log(array1);

//splice adiciona ou remove um elemento no meio do array
var array2 = [1,2,3,4,5,6];

//adicionando o número 55
array2.splice(1,0,55);
console.log(array2);

//removendo o número 6
array2.splice(6,1);
console.log(array2);

//join transformando array em string
var arrayString = ['Allison','Luis','de','Oliveira','Dias'];
console.log(arrayString.join(' '));

//reverse
console.log(arrayString.reverse());


