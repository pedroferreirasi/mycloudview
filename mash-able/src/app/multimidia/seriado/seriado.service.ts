import { Component, OnInit, Injectable } from '@angular/core';

import { GenericoService } from '../../framework/servico/generico.service';
import { Http } from '@angular/http';
import { Seriado } from '../../model/multimidia/seriado.model';

@Injectable()
export class SeriadoService extends GenericoService<Seriado>  {

    constructor(public http : Http) {
        super(http);
        this.funcionalidade = "seriado/";
    }

}