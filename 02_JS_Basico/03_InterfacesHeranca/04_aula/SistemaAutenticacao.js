// Ser autenticável significa ter o método autenticar
// O cliente, por exemplo, não tem
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}