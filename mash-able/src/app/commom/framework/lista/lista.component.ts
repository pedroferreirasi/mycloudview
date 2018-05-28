import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ListaService } from './lista.service';
import { Seriado } from '../../../model/multimidia/seriado.model';

import swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
  providers: [ListaService]
})
export class ListaComponent implements OnInit {

  protected registrosPorPagina: number = 10;
  protected dataSource = [];
  protected tempDataSource = [];
  protected registroSelecionado = [];
  public listaService: ListaService<Seriado>;
  @Input() public columns: any[] = [];
  @Input() public propurl: string;
  @Input() public titulo: String;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  urlendereco: string;

  constructor(listaService: ListaService<Seriado>) {
    this.listaService = listaService;

    this.listaService.getAll().then((dados: Seriado[]) => {
      this.dataSource = dados;
      this.tempDataSource = dados;
      //this.registroSelecionado = dados[0];
    })
  }

  ngOnInit() { }

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
