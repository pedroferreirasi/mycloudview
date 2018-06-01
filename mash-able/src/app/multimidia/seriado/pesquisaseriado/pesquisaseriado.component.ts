import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaComponent } from '../../../framework/lista/lista.component';
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

  public service : SeriadoService;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id", width: 120, sortable: true, resizeable: false, draggable: false, canAutoResize: false},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"},
    { name: "Atualizado", prop: "dtUltimaAtualizacao"}
  ]

  constructor(seriadoService : SeriadoService) {
    this.service = seriadoService;
  }

  ngOnInit() {}

}
