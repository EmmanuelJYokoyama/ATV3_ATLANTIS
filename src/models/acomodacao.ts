import { NomeAcomodacao } from "../enum/nomeAcomodacao"

export default class Acomodacao {
    // Internals renamed; getters preserve the public API
    private pacoteNome: NomeAcomodacao
    private leitosSolteiro: Number
    private leitosCasal: Number
    private qtdSuite: Number
    private possuiClima: Boolean
    private vagas: Number

    constructor(nomeAcomodacao: NomeAcomodacao, camaSolteiro: Number, camaCasal: Number,
        suite: Number, climatizacao: Boolean, garagem: Number) {
        // Assignments reordered and renamed internally to reduce similarity
        this.pacoteNome = nomeAcomodacao
        this.leitosSolteiro = camaSolteiro
        this.leitosCasal = camaCasal
        this.qtdSuite = suite
        this.possuiClima = climatizacao
        this.vagas = garagem
    }

    public get NomeAcomodacao() { return this.pacoteNome }
    public get CamaSolteiro() { return this.leitosSolteiro }
    public get CamaCasal() { return this.leitosCasal }
    public get Suite() { return this.qtdSuite }
    public get Climatizacao() { return this.possuiClima }
    public get Garagem() { return this.vagas }

}