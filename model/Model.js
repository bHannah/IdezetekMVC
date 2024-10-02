import { motivationalQuotes } from "./adat.js"

export default class Model{
    #lista = ["","","","","","","","","","","","","","","","","","","",""]
    #menny

    constructor(){
        this.getLista()
        this.#menny=0;
    }

    getLista(){
        return this.#lista
    }

    feltoltLista(i){
        let Elemek = motivationalQuotes
        let randomIndex = Math.floor(Math.random() * Elemek.length);

        let kivalasztott = Elemek.splice(randomIndex, 1)[0];
        this.#lista[i] = kivalasztott;
    }

    szamlalo(){
        this.#menny += 1;
        return this.#menny;
    }
}