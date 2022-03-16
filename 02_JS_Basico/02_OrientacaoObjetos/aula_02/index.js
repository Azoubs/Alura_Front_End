// Define a classe
class Cliente {
    // Campos, atributos ou propriedades
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    // O underline indica que o atributo é privado
    // O # deixa privado de verdade, as _ é a convenção
    _saldo = 0;

    sacar(valor) {
        // Acessamos o saldo desta própria conta corrente (this)
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    
    depositar(valor) {
        if (valor <= 0) {
            // O retorno 'sai' da função
            // Por isso não precisa do else
            return;
        }
        this._saldo += valor;
    }
}

// Instancia clientes (cria objetos)
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 11122233344;

cliente2.nome = "Alice";
cliente2.cpf = 55566677788;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
// Se o atributo não existe na classe original, é criado dinamicamente
// Para esta classe específica
contaCorrenteRicardo.qualquerCoisa = "abublé";

contaCorrenteRicardo.depositar(-100);
contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.depositar(100);

const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);