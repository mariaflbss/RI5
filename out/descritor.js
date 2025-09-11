"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Descritor = /** @class */ (function () {
    function Descritor() {
    }
    Descritor.prototype.descrever = function (empresa) {
        console.log("Raz\u00E3o Social: ".concat(empresa.razaoSocial, "\n") +
            "Nome Fantasia: ".concat(empresa.nomeFantasia, "\n") +
            "CNPJ: ".concat(empresa.cnpj, "\n") +
            "Endere\u00E7o:\n" +
            "Rua: ".concat(empresa.endereco.rua, " Bairro: ").concat(empresa.endereco.bairro, " Cidade: ").concat(empresa.endereco.cidade, " N\u00FAmero: ").concat(empresa.endereco.numero, "\n") +
            "Telefones:\n" +
            "".concat(empresa.telefones.map(function (telefone) { return "DDD: ".concat(telefone.ddd, " N\u00FAmero: ").concat(telefone.numero); }).join("\n"), "\n\n") +
            "Funcion\u00E1rios:\n" +
            "".concat(empresa.funcionarios.map(function (funcionario) {
                return "Nome: ".concat(funcionario.nome, "\n") +
                    "Matr\u00EDcula: ".concat(funcionario.matricula, "\n") +
                    "CPF: ".concat(funcionario.cpf, "\n") +
                    "Endere\u00E7o:\n" +
                    "Rua: ".concat(funcionario.endereco.rua, " Bairro: ").concat(funcionario.endereco.bairro, " Cidade: ").concat(funcionario.endereco.cidade, " N\u00FAmero: ").concat(funcionario.endereco.numero, "\n") +
                    "Telefone:\n" +
                    "DDD: ".concat(funcionario.telefone.ddd, " N\u00FAmero: ").concat(funcionario.telefone.numero, "\n");
            }).join("\n")));
    };
    return Descritor;
}());
exports.default = Descritor;
