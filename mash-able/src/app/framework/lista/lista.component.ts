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
import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";

import swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent<T> implements OnInit {

  private registrosPorPagina: number = 10;
  private dataSource = [];
  private tempDataSource = [];
  private registroSelecionado = [];
  
  @Input() public service: any;
  @Input() public columns: any[] = [];
  @Input() public titulo: String;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor() {
  }

  ngOnInit() {
    this.service.getAll().then((dados: T[]) => {
      this.dataSource = dados;
      this.tempDataSource = dados;
      //this.registroSelecionado = dados[0];
    });
   }

  alterarLimit(evento: KeyboardEvent) {
    this.registrosPorPagina = parseInt((<HTMLInputElement>evento.target).value);
    this.table.limit = this.registrosPorPagina;
    this.table.recalculate();
  }

  filtrar(event) {

    let rowsPesquisa = [];
    let rowsFiltro = [];

    rowsFiltro = this.tempDataSource;

    // Valor digitado para pesquisa
    let valorPesquisa = event.target.value.toLowerCase();

    // Contador de quantas colunas existem na tabela
    let quantidadeColunasTabela = this.table.columns.length;

    // Array dos nomes das colunas da tabela
    let colunasTabela = Object.keys(rowsFiltro[0]);

    rowsPesquisa = rowsFiltro.filter(function (item) {
      // Pesquisa em todas as colunas
      for (let i = 0; i < quantidadeColunasTabela; i++) {
        if (typeof item[colunasTabela[i]] == "string") {
          if ((<string>item[colunasTabela[i]]).toLowerCase().indexOf(valorPesquisa) !== -1 || !valorPesquisa) {
            return true;
          }
        }
      }
    });

    if (rowsPesquisa.length > 0) {
      this.dataSource = rowsPesquisa;
    } else {
      this.dataSource = [];
    }

    // whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onSelect({ registroSelecionado }) { }

  onActivate(event) { }

  openSuccessCancelSwal() {
    swal({
      title: 'Tem Certeza?',
      text: "Você não poderá reverter isso!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Delete!',
      cancelButtonText: 'Não, cancelar!',
      confirmButtonClass: 'btn btn-success m-r-10',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then(function () {
      swal(
        'Deletado!',
        'Registro deletado.',
        'success'
      )
    }, function (dismiss) {
      if (dismiss === 'cancel') {
        swal(
          'Cancelado',
          'Ação cancelada com sucesso :)',
          'error'
        )
      }
    }).catch(swal.noop);
  }
}