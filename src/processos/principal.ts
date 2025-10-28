import Processo from "../abstracoes/processo"
import MenuPrincipal from "../menus/menuPrincipal"
import TipoCadastroCliente from "./tipoCadastroCliente"
import TipoListagemClientes from "./tipoListagemClientes"
import EditarCliente from "./editarCliente"
import ExcluirCliente from "./excluirCliente"
import CadastrarHospedagem from "./cadastrarHospedagem"
import ListagemAcomodacoes from "./listagemAcomodacoes"
import ListagemHospedagens from "./listagemHospedagens"

export default class Principal extends Processo {
    constructor() {
        super()
        this.execucao = true
        this.menu = new MenuPrincipal()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')

        // Dispatcher to reduce switch verbosity while keeping behavior
        const acoes: { [k: number]: () => void } = {
            1: () => { this.processo = new TipoCadastroCliente(); this.processo.processar() },
            2: () => { this.processo = new EditarCliente(); this.processo.processar() },
            3: () => { this.processo = new TipoListagemClientes(); this.processo.processar() },
            4: () => { this.processo = new ExcluirCliente(); this.processo.processar() },
            5: () => { this.processo = new ListagemAcomodacoes(); this.processo.processar() },
            6: () => { this.processo = new CadastrarHospedagem(); this.processo.processar() },
            7: () => { this.processo = new ListagemHospedagens(); this.processo.processar() },
            0: () => { this.execucao = false; console.log('Até logo!'); console.clear() }
        }

        const executar = acoes[this.opcao]
        executar ? executar() : console.log('Opção não entendida :(')
    }
}