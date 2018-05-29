import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaComponent } from '../../commom/framework/lista/lista.component';
import { URL_SERIADO } from '../../commom/constante/constantes';
import { Seriado } from '../../model/multimidia/seriado.model';
import { PesquisaSeriadoService } from './pesquisaseriado.service';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css'],
  providers: [PesquisaSeriadoService]
})
export class PesquisaSeriadoComponent implements OnInit {

  @ViewChild(ListaComponent) listaGenerica: ListaComponent<Seriado>;

  public listaService : PesquisaSeriadoService;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id"},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"}
  ]

  constructor(pesquisaSeriadoService : PesquisaSeriadoService) {
    this.listaService = pesquisaSeriadoService; 
  }

  ngOnInit() {}

}
