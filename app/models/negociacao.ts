export class Negociacao {
    
    constructor(
                private _data: Date, 
                public readonly quantidade: number, 
                public readonly valor: number
            ) {}


    get data(): Date {
        //protecção para que não possamos alterar o valor do atributo da classe
        const data = new Date(this._data.getTime());
        return data;
    }

    get volume(): Number {
        return this.quantidade * this.valor;
    }
}