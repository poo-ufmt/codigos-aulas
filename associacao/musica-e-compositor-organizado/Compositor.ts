export class Compositor{
    private _nome: string;
    private _dataNascimento: Date;

    constructor(nome: string, dataNascimento: Date){
        this._nome = nome;
        this._dataNascimento = dataNascimento;
    }

    get nome(){
        return this._nome;
    }
    set nome(nome: string){
        this._nome = nome;
    }

    get dataNascimento(){
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento: Date){
        this._dataNascimento = dataNascimento;
    }
}