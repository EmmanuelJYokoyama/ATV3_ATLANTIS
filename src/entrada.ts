import promptSync from "prompt-sync";

export default class Entrada {
    public receberNumero(mensagem: string): number {
        const leitor = promptSync();
        const textoDigitado = leitor(`${mensagem} `)
        const numeroParse = new Number(textoDigitado)
        return numeroParse.valueOf()
    }
    public receberTexto(mensagem: string): string {
        const leitor = promptSync();
        const resposta = leitor(`${mensagem} `)
        return resposta
    }
    public receberData(mensagem: string): Date {
        const leitor = promptSync();
        const entrada = leitor(`${mensagem}, no padrão dd/mm/yyyy: `)
        const [diaStr, mesStr, anoStr] = entrada.split('/')
        const ano = new Number(anoStr)
        const mes = new Number(mesStr)
        const dia = new Number(diaStr)
        return new Date(ano.valueOf(), mes.valueOf() - 1, dia.valueOf())
    }
}