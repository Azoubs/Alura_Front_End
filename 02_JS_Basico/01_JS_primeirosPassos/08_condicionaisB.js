console.log(`\nCondicionais\n`);

const listaDeDestinos = new Array(
    `Recife`,
    `Rio de Janeiro`,
    `Salvador`
);

const idadeComprador = 18;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("\nBoa viagem!\n");
    listaDeDestinos.splice(2, 1); // Remove item
} else {
    console.log("\nNão é maior de idade, não posso vender!\n");
}

console.log("Embarque:");

if (idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!!\n");
} else {
    console.log("Você não pode embarcar.\n");
}

console.log(listaDeDestinos);