let Pessoa = {
    nome: 'Allison',
    idade: 26,
    falar: function () {
        console.log('Olá, tudo bem?');
    },
    dizerNome: function () {
        console.log('Meu nome é ' + this.nome)
    }
}

console.log(Pessoa.nome);
console.log(Pessoa.idade);
Pessoa.falar();
Pessoa.dizerNome();