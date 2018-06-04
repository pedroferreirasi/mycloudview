import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http'

import { environment } from '../../../environments/environment'

@Injectable()
export class GenericoService<T> {
    
    public http : Http;
    public urldominio : string = environment.enderecoURL;
    public funcionalidade : string = "";

    constructor(http : Http) {
        this.http = http;
    }

    public save() {
    }

    public getAll() : Promise<T[]> {
        return this.http.get(this.urldominio + this.funcionalidade).toPromise().then(res => res.json());
    }

    public getGenrico(caminho : String) : Promise<T[]> {
        return this.http.get(this.urldominio + caminho).toPromise().then(res => res.json());       
    }

}