import { Component, OnInit, Injectable } from '@angular/core';

import { GenericoService } from '../../commom/framework/generico.service';
import { Http } from '@angular/http';
import { Seriado } from '../../model/multimidia/seriado.model';

@Injectable()
export class PesquisaSeriadoService extends GenericoService<Seriado>  {

    constructor(public http : Http) {
        super(http);
    }

}