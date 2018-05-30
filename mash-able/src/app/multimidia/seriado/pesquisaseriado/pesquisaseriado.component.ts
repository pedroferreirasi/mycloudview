/*
 * Atributos que podem ser utilizados para coluna dinamica:
  @Input() name: string;
  @Input() prop: TableColumnProp;
  @Input() frozenLeft: any;
  @Input() frozenRight: any;
  @Input() flexGrow: number;
  @Input() resizeable: boolean;
  @Input() comparator: any;
  @Input() pipe: any;
  @Input() sortable: boolean;
  @Input() draggable: boolean;
  @Input() canAutoResize: boolean;
  @Input() minWidth: number;
  @Input() width: number;
  @Input() maxWidth: number;
  @Input() checkboxable: boolean;
  @Input() headerCheckboxable: boolean;
  @Input() headerClass: string | ((data: any) => string|any);
  @Input() cellClass: string | ((data: any) => string|any);
  @Input() summaryFunc: (cells: any[]) => any;
  @Input() summaryTemplate: TemplateRef<any>;
 */
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

  public service : SeriadoService;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id", width: 120, sortable: true, resizeable: false, draggable: false, canAutoResize: false},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"},
    { name: "Coluna", prop: "teste" }
  ]

  constructor(seriadoService : SeriadoService) {
    this.service = seriadoService;
  }

  ngOnInit() {}

}
