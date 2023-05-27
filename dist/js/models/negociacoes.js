export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        //mesmo funcionamento que o acima
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
}
