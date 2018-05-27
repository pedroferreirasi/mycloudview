import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Injectable } from "@angular/core";

import { Http } from '@angular/http'

@Injectable()
export class ServiceGenericoService<T> {
    
    public http : Http;
    

    save() {
    }

    public getAll(url : string) : any {
        let dataSource : any;
        console.log("Antes da Chamada");
        this.http.get(`http://pedroferreirasi.servehttp.com:8080/seriado/`)
        .subscribe((data)=> {
          dataSource = data.json();
        });
        console.log("Chegou");
        console.log(dataSource);
        return dataSource;
    }

}