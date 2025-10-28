import Impressor from "../interfaces/impressor";
import Acomodacao from "../models/acomodacao";

export default class ImpressorAcomodacao implements Impressor {
    private acomodacao: Acomodacao
    constructor(acomodacao: Acomodacao) {
        this.acomodacao = acomodacao
    }
    imprimir(): string {
        const linhas = [
            `Nomenclatura: ${this.acomodacao.NomeAcomodacao.toString()}`,
            `-- Quantidade de leitos para solteiros: ${this.acomodacao.CamaSolteiro}`,
            `-- Quantidade de leitos para casais: ${this.acomodacao.CamaCasal}`,
            `-- Climatização: ${this.converterBooleano(this.acomodacao.Climatizacao)}`,
            `-- Quantidade de garagens disponíveis: ${this.acomodacao.Garagem}`,
            `-- Quantidade de suites: ${this.acomodacao.Suite}`,
        ]
        return linhas.join("\n")
    }

    private converterBooleano(valor: Boolean) {
        return valor ? `sim` : `não`
    }
}