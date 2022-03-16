// Classe abstrata
export class Conta {
    // Propriedades de instâncias devem ser definidas
    // Dentro dos métodos da classe
    // O mais comum é fazer isso no construtor
    constructor(saldoInicial, cliente, agencia) {
        // Quando o construtor é chamado através de uma classe filha, ele vem com o nome dessa classe filha
        if(this.constructor == Conta) {
            throw new Error("\nVocê não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstata\n");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }   

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato - deve ser sobrescrito pelas classes filhas
    sacar(valor) {
        throw new Error("\n\nO método sacar da conta é abstrato!\n");
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
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