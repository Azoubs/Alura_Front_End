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

if (idadeComprador >= 18) {
    console.log("\nCompador maior de idade.\n");
    listaDeDestinos.splice(1, 1); // remove o item
} else if (estaAcompanhada == true) {
    console.log("\nComprador está acompanhado.\n");
    listaDeDestinos.splice(1, 1); // remove o item
} else {
    console.log("\nNão é maior de idade, não posso vender\n");
}

console.log(`idadeComprador > 18 = ${idadeComprador > 18}`);
console.log(`idadeComprador < 18 = ${idadeComprador < 18}`);
console.log(`idadeComprador >= 18 = ${idadeComprador >= 18}`);
console.log(`idadeComprador <= 18 = ${idadeComprador <= 18}`);
console.log(`idadeComprador == 18 = ${idadeComprador == 18}`);
console.log(`idadeComprador != 18 = ${idadeComprador != 18}\n`);
