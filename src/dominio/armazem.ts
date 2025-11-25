import Cliente from "../models/cliente";
import Acomodacao from "../models/acomodacao";
import Hospedagem from "../models/hospedagem";

export default class Armazem {
    private static instanciaUnica: Armazem = new Armazem()
  
    private listaClientes: Cliente[] = []
    private estoqueAcomodacoes: Acomodacao[] = []
    private registrosHospedagem: Hospedagem[] = []
    private constructor() { }
    public static get InstanciaUnica() {
        return this.instanciaUnica
    }
    public get Clientes() {
        return this.listaClientes
    }
    public get Acomodacoes(){
        return this.estoqueAcomodacoes
    }
    public get Hospedagens(){
        return this.registrosHospedagem
    }
}