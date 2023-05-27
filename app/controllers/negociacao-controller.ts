import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export  class NegociacaoController {
   
        private inputData: HTMLInputElement;
        private inputQuanitdade : HTMLInputElement;
        private inputValor: HTMLInputElement;
        private negociacoes = new Negociacoes();


        constructor() {
           this.inputData = document.querySelector("#data");
           this.inputQuanitdade = document.querySelector("#quantidade");
           this.inputValor = document.querySelector("#valor");
        }

    adiciona(): void{
        const negociacao = this.criaNegociacao(); 
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());

        this.limparForm();
    }

    criaNegociacao(): Negociacao{
        const  exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantidade = parseInt(this.inputQuanitdade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao( date, quantidade, valor);
    }

    limparForm(): void{
        this.inputData.value = "";
        this.inputQuanitdade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

}