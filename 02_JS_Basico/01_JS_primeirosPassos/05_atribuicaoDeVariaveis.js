console.log("\nTrabalhando com atribuição de variáveis\n");

const primeiroNome = "Filipe";
const sobrenome = "Azoubel";

// console.log(primeiroNome + " " + sobrenome);
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

// O const não pode mudar, retorna um erro
// O let é uma variável comum, pode ser modificada
let contador = 0;
contador = contador + 1;

// A boa prática é ter uma atribuição constante, uma vez que a mudança
// de estados na programação é algo complexo que pode trazer muitos erros
const nomeCompleto = primeiroNome + sobrenome;
console.log(nomeCompleto);

let idade; // declara variável
idade = 29; // atribuindo valor
idade += 1;

console.log(`Idade: ${idade}\n`)