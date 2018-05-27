import { Component, OnInit, Injectable } from '@angular/core';
//import { Seriado } from '../../../model/multimidia/seriado.model';
//import { ServiceGenericoService } from '../servicegenerico.service';

@Injectable()
export class ListaService  {
    
    public teste : string;

    constructor() {
        this.teste = "retornou certo";
    }

    getAll2() : Promise<String> {
        return new Promise((resolve) => {
            console.log("passou aqui")
            console.log(this.teste)
            resolve ( this.teste )
        });
        
    }

}