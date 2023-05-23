/* var nome        = 'Allison';
var profissao   = 'Desenvolvedor';

if (nome == 'Allison' && profissao == 'Programador') {
    console.log('Correto');
}else if (nome == 'Allison' || profissao == 'Desenvolvedor') {
    console.log('Errado');
};

 */
/* var x = 0;

while (x <= 5) {

    console.log(x);

    x++;
}

var arr = ['a','b','c','d','e','f'];
var y = 0;

while (y <= 3) {

    console.log(arr[y]);

    y++;
};

var nome = 'Luis';
var i = 0;

while (i <= 3) {
    console.log(nome[i]);
    
    i++;
}; */

/* var i = 0;

for (var i = 0; i <= 10; i++) {
    console.log('Repetindo for ' + i);
};

var arr = ['um', 'dois', 'três', 'quatro', 'cinco'];

for (var j = 0; j <= arr.length; j++) {
    console.log(arr[j]);
};

console.log(arr.length); */


/* for(var k = 10; k > 0; k--) {

    console.log(k);

    if(k === 5) {
        break;
    }
};

console.log("Deu break."); */

var j = 0;

while (j < 100) {
    j = j + 10;

    if (j === 60) {
        continue;
    };

    console.log("Continue: " + j)
};