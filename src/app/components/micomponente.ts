import { Component } from "@angular/core";

@Component({
    selector: "mi-componente",
    template: `
    <h1> Mi componente <h1>
    <p>Este es el primer componente<p>
    `
})

export class MiComponente{
    constructor(){
        console.log("Componente mi-componente cargado")
    }

}