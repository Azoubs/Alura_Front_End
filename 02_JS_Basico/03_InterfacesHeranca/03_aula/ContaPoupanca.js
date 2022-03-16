import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia) {
        // A palavra-chave super é usada para acessar o objeto pai de um objeto
        // em outros casos, é usada para acessar a classe pai de uma classe
        // O super abaixo acessa o construtor da classe Conta
        super(saldoInicial, cliente, agencia);
    }

    // sobrescreve o método sacar da Conta, pois é abstrato
    sacar(valor) {
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}