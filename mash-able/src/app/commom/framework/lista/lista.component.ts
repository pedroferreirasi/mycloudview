import { Component, OnInit, ViewChild, Input } from '@angular/core';
//import { Http, Response } from '@angular/http';
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
  public listaService : ListaService;
  @Input() public columns: any[] = [];
  @Input() public propurl : string;
  @Input() public titulo : String;

  @ViewChild(DatatableComponent) table: DatatableComponent;

   urlendereco : string;

  constructor() {

  }

  ngOnInit() {
    //this.entityService = new ListaService();
    /*this.dataSource = this.entityService.getAll().then();
    this.tempDataSource = this.dataSource;
    this.registroSelecionado = this.dataSource[0];*/
    let qualquer : string;
    this.listaService.getAll2().then((teste : string) => {
      qualquer = teste.toString();
    });
    console.log("era pra ser aqui");
    console.log(qualquer);
    
    /*this.getAll((data) => {
      this.registroSelecionado = [data[0]];
      this.dataSource = data;
      this.tempDataSource = [...data];
    });*/
   }

  getAll(cb) {
      const req = new XMLHttpRequest();
      req.open('GET',`${this.propurl}`);
  
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
  
      req.send();
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
