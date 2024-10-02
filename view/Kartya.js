export default class Kartya{
    #obj
    #szuloElem
    #index

    constructor(obj, szuloElem, index) {
        this.#obj = obj
        this.#szuloElem = szuloElem
        this.#index = index
        this.kartyaMegjelenit()
        this.kattintottElem = $(".kartya:last-child")
        this.#esemenyKezelo()
    }

    kartyaMegjelenit(){
        this.#szuloElem.append(`<div class="card col-sm-4 col-md-3 col-md-2 kartya">${this.#obj}</div>`)
    }

    #esemenyKezelo(){
        this.kattintottElem.on("click", ()=>{
            const e = new CustomEvent("kattintas", {detail: this.#index});
            window.dispatchEvent(e);
        })
    }
}