export class Conta {
    // Propriedades de instâncias devem ser definidas
    // Dentro dos métodos da classe
    // O mais comum é fazer isso no construtor
    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }   

    sacar(valor) {
        taxa = 1.1 * valor;
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}