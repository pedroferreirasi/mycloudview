import { Component, OnInit, Injectable } from '@angular/core';

import { Seriado } from '../../../model/multimidia/seriado.model';
import { GenericoService } from '../generico.service';
import { Http } from '@angular/http';

@Injectable()
export class ListaService<T> extends GenericoService<T>  {

    constructor(public http : Http) {
        super(http);
    }

}