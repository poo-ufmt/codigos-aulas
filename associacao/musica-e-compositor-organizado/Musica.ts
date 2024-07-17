import { Compositor } from "./Compositor";

export class Musica{
    private _titulo: string;
    private _duracao: number;
    private _ecad: number;
    private _compositores: Compositor[];
    private _interpretes: string[];

    constructor(titulo: string, duracao: number, ecad: number, compositores: Compositor[], interpretes: string[]){
        this._titulo = titulo;
        this._duracao = duracao;
        this._ecad = ecad;
        this._compositores = compositores;
        this._interpretes = interpretes;
    }

    get titulo(){
        return this._titulo;
    }
    set titulo(titulo: string){
        this._titulo = titulo;
    }

    get duracao(){
        return this._duracao;
    }
    set duracao(duracao: number){
        this._duracao = duracao;
    }

    get ecad(){
        return this._ecad;
    }
    set ecad(ecad: number){
        this._ecad = ecad;
    }

    get compositores(){
        return this._compositores;
    }

    adicionarCompositor(compositor: Compositor){
        this._compositores.push(compositor);
    }

    removerCompositor(compositor: Compositor){
        let index = this._compositores.indexOf(compositor);
        if(index >= 0){
            this._compositores.splice(index, 1);
        }        
    }

    get interpretes(){
        return this._interpretes;
    }

    adicionarInterprete(interprete: string){
        this._interpretes.push(interprete);
    }

    removerInterprete(interprete: string){
        let index = this._interpretes.indexOf(interprete);
        if(index >= 0){
            this._interpretes.splice(index, 1);
        }
    }
}
