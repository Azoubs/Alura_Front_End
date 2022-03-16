import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0;

    // Propriedades de instâncias devem ser definidas
    // Dentro dos métodos da classe
    // O mais comum é fazer isso no construtor
    constructor(cliente, agencia){
        // A palavra-chave super é usada para acessar o objeto pai de um objeto
        // em outros casos, é usada para acessar a classe pai de uma classe
        // O super abaixo acessa o construtor da classe Conta
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // sobrescreve o método sacar da Conta, pois é abstrato
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}
