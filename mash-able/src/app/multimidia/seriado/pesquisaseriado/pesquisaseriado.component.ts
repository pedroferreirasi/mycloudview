import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaComponent } from '../../../commom/framework/lista/lista.component';
import { URL_SERIADO } from '../../../commom/constante/constantes';
import { Seriado } from '../../../model/multimidia/seriado.model';
import { SeriadoService } from '../seriado.service';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css'],
  providers: [SeriadoService]
})
export class PesquisaSeriadoComponent implements OnInit {

  @ViewChild(ListaComponent) listaGenerica: ListaComponent<Seriado>;

  public listaService : SeriadoService;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id"},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"}
  ]

  constructor(seriadoService : SeriadoService) {
    this.listaService = seriadoService;
  }

  ngOnInit() {}

}
