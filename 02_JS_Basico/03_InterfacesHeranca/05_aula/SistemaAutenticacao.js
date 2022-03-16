/*
Ser autenticavel significa ter o método autenticar

Duck typing é um estilo de codificação de linguagens dinamicamente 
tipadas onde o tipo de uma variável não importa, contanto que seu 
comportamento seja o desejado
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    // O autenticar existe E é uma instância de uma função?
    static ehAutenticavel(autenticavel){
       return "autenticar" in autenticavel &&
        autenticavel.autenticar instanceof Function
    }
}