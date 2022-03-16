console.log(`\nLoops - For\n`);

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
for(let i  = 0 ; i < 3 ; i++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
   
}

console.log("Destino exite: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem!\n");
} else {
    console.log("Desculpe, tivemos um erro.\n");
}

