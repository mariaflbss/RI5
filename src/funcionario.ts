import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Funcionario {
    public nome: string
    public cpf: string
    public endereco: Endereco
    public telefone: Telefone
    constructor(nome:string, cpf:string, endereco: Endereco, telefone: Telefone){
        this.nome = nome
        this.cpf = cpf
        this.endereco = endereco
        this.telefone = telefone
    }
}