import { Component, OnInit, ViewChild } from '@angular/core';

import { URL_SERIADO } from '../../commom/constante/constantes';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css']
})
export class PesquisaSeriadoComponent implements OnInit {

  public endereco : String;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id"},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"}
  ]

  constructor() {
    this.endereco = URL_SERIADO;
  }

  ngOnInit() {}

}
