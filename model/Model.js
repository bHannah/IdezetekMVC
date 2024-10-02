import { motivationalQuotes } from "./adat.js"

export default class Model{
    #lista = ["","","","","","","","","","","","","","","","","","","",""]

    constructor(){
        this.getLista()
    }

    getLista(){
        return this.#lista
    }

    feltoltLista(i){
        if(this.#lista[i] === ""){
            let Elemek = motivationalQuotes
            let randomIndex = Math.floor(Math.random() * Elemek.length);

            let kivalasztott = Elemek.splice(randomIndex, 1)[0];
            this.#lista[i] = kivalasztott;
        }
    }

    szamlalo(){
        let menny = 0;
        for (let i = 0; i < this.#lista.length; i++) {
            if(this.#lista[i] != ""){
                menny += 1
            }
            
        }
        return menny;
    }
}