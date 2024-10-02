import Jatekter from "../view/Kartyak.js";
import Model from "../model/Model.js";

export default class Control{
    constructor(){
        this.szuloElem = $('.idezetek')
        this.model = new Model()
        this.jatekter = new Jatekter(this.model.getLista(), this.szuloElem)
        this.esemenykezelo();
    }

    esemenykezelo(){
        $(window).on("kattintas", (event)=>{
            console.log(event.detail)
            this.model.feltoltLista(event.detail);
            this.jatekter = new Jatekter(this.model.getLista(), this.szuloElem)
            this.jatekter.mennyisegMegjelenit(this.model.szamlalo())
        })
    }
}