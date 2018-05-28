import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http'

@Injectable()
export class GenericoService<T> {
    
    public http : Http;

    constructor(http : Http) {
        this.http = http;
    }

    public save() {
    }

    public getAll() : Promise<T[]> {
        return this.http.get("http://pedroferreirasi.servehttp.com:8080/seriado/").toPromise().then(res => res.json());       
    }

}