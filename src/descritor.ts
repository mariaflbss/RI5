export default class Descritor {
    public descrever(empresa: any) {
        console.log(
            `Razão Social: ${empresa.razaoSocial}\n` +
            `Nome Fantasia: ${empresa.nomeFantasia}\n` +
            `CNPJ: ${empresa.cnpj}\n` +
            `Endereço:\n` +
            `Rua: ${empresa.endereco.rua} Bairro: ${empresa.endereco.bairro} Cidade: ${empresa.endereco.cidade} Número: ${empresa.endereco.numero}\n` +
            `Telefones:\n` +
            `${empresa.telefones.map((telefone: any) => `DDD: ${telefone.ddd} Número: ${telefone.numero}`).join("\n")}\n\n` +
            `Funcionários:\n` +
            `${empresa.funcionarios.map((funcionario: any) =>
                `Nome: ${funcionario.nome}\n` +
                `Matrícula: ${funcionario.matricula}\n` +
                `CPF: ${funcionario.cpf}\n` +
                `Endereço:\n` +
                `Rua: ${funcionario.endereco.rua} Bairro: ${funcionario.endereco.bairro} Cidade: ${funcionario.endereco.cidade} Número: ${funcionario.endereco.numero}\n` +
                `Telefone:\n` +
                `DDD: ${funcionario.telefone.ddd} Número: ${funcionario.telefone.numero}\n`
            ).join("\n")}`
        )
    }
}
