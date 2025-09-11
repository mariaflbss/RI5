import Endereco from "./endereco"
import funcionario from "./funcionario"
import telefone from "./telefone"

export default class Empresa{
    public razaoSocial: string
    public nomeFantasia: string
    public cnpj: string
    public endereco: Endereco
    public funcionarios: funcionario[]
    public telefones: telefone[]
    constructor(funcionarios: funcionario[], endereco: Endereco, razaoSocial: string, nomeFantasia: string, cnpj: string, telefones: telefone[]){
        this.funcionarios = funcionarios
        this.endereco = endereco
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.cnpj = cnpj
        this.telefones = telefones
    }
}