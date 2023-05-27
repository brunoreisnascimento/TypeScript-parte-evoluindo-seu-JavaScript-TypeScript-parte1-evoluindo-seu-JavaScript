import { Negociacao } from "./negociacao.js";

export class Negociacoes {

    //private negociacoes: Array<Negociacao> = [];
    //mesmo funcionamento que o acima
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao)
    {
        this.negociacoes.push(negociacao);
    }    

    lista(): readonly Negociacao[]{
        return this.negociacoes;
    }


}