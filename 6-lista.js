console.log(`Trabalhando com lista`);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`, `São Paulo`, `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`);//Comando .push adiciona um item a lista de array
listaDeDestinos.push(`Aracaju`);
console.log("Destinos possíveis:");
//console.log("Salvador, Sao Paulo, Rio de Janeiro")
console.log(listaDeDestinos);


listaDeDestinos.splice(1,1); // Comando .splice serve para tirar um elemento da lista de array primeiro number é qual o elemento a ser removido e o segundo number quantos elementos a ser removido.
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //exibe a lista na tela.