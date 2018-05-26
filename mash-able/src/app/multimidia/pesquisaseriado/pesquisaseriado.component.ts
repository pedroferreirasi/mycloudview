import { Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';

import { ListaGenerica } from '../../commom/framework/listagenerica';
import { URL_SERIADO } from '../../commom/constante/constantes';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css']
})
export class PesquisaSeriadoComponent extends ListaGenerica implements OnInit {


  constructor() {
    super(URL_SERIADO);
  }

  ngOnInit() { }

}
