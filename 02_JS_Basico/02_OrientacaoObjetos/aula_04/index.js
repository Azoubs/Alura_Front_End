import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 55566677788;

const contaRicardo = new ContaCorrente();
contaRicardo.agencia = 1001;
contaRicardo.cliente = cliente1;
contaRicardo.depositar(500);

const contaAlice = new ContaCorrente();
contaAlice.cliente = cliente2;
contaAlice.agencia = 102;

let valor = 200;
contaRicardo.transferir(valor, contaAlice);

console.log(`\nValor: ${valor}`);
console.log(contaRicardo);
console.log(contaAlice);

// contaAlice.saldo = 20000;
console.log(contaRicardo.saldo);
console.log(contaAlice.saldo);