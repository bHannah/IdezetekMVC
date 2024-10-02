import Kartya from "./Kartya.js";

export default class Jatekter{
    #lista
    #szuloElem

    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloElem = szuloElem
        this.#szuloElem.empty()
        this.jatekTerMegjelenit()
    }

    jatekTerMegjelenit(){
        this.#lista.forEach((elem, index) => {
            new Kartya(elem, this.#szuloElem, index)
        })
    }

    mennyisegMegjelenit(szam){
        let szuloElem = $(".mennyiseg")
        szuloElem.empty()
        szuloElem.append(`Eddig ${szam} idézetet fedtél fel!`)
    }
}