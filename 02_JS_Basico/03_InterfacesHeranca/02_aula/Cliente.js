export class Cliente{

    get cpf(){
        return this._cpf;
    }

    // Propriedades de instâncias devem ser definidas
    // Dentro dos métodos da classe
    // O mais comum é fazer isso no construtor
    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }

}