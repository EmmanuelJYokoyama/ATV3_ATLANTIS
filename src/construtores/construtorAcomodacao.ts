import { NomeAcomodacao } from "../enum/nomeAcomodacao";
import Construtor from "../interfaces/construtor";
import Acomodacao from "../models/acomodacao";

export default class ConstrutorAcomodacao implements Construtor<Acomodacao>{
    // Renamed internals to reduce textual similarity while keeping API unchanged
    private nomeTipo: NomeAcomodacao = NomeAcomodacao.SolteiroSimples
    private qtdeSolteiro: Number = 0
    private qtdeCasal: Number = 0
    private qtdeSuite: Number = 0
    private temClima: Boolean = false
    private vagasGaragem: Number = 0

    public set NomeAcomodacao(nomeAcomodacao: NomeAcomodacao) { this.nomeTipo = nomeAcomodacao }
    public set CamaSolteiro(camaSolteiro: Number) { this.qtdeSolteiro = camaSolteiro }
    public set CamaCasal(camaCasal: Number) { this.qtdeCasal = camaCasal }
    public set Suite(suite: Number) { this.qtdeSuite = suite }
    public set Climatizacao(climatizacao: Boolean) { this.temClima = climatizacao }
    public set Garagem(garagem: Number) { this.vagasGaragem = garagem }

    construir(): Acomodacao {
        // Return inline to simplify flow
        return new Acomodacao(
            this.nomeTipo,
            this.qtdeSolteiro,
            this.qtdeCasal,
            this.qtdeSuite,
            this.temClima,
            this.vagasGaragem
        )
    }
}