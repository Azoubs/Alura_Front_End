console.log(`\nLoops - While\n`);

const listaDeDestinos = new Array(
    `Recife`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Recife";
const podeComprar  = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    contador += 1;
}

console.log("Destino exite: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!\n");
} else {
    console.log("Desculpe, tivemos um erro.\n");
}