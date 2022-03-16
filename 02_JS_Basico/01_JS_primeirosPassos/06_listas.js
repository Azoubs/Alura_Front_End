console.log(`\nTrabalhando com Listas\n`)

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// A lista é um const, mas podemos adicionar novos elementos!
// Não podemos alterar o valor (mudar para um número, por exemplo)
const listaDeDestinos = new Array(
    `Recife`,
    `Rio de Janeiro`,
    `Salvador`
);

// Adiciona um item na lista
listaDeDestinos.push(`Curitiba`); 

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// Deleta um item da lista
// Começa da posição 2, deleta um elemento
listaDeDestinos.splice(2, 1);

console.log(`listaDeDestinos.splice(2, 1)`);
console.log(listaDeDestinos);

// Imprime elemento por elemento
console.log(`\nlistaDeDestinos[0] = ${listaDeDestinos[0]}`);
console.log(`listaDeDestinos[1] = ${listaDeDestinos[1]}`);
console.log(`listaDeDestinos[2] = ${listaDeDestinos[2]}\n`);