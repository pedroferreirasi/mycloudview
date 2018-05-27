import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  protected registrosPorPagina: number = 10;
  protected dataSource = [];
  protected tempDataSource = [];
  protected registroSelecionado = []; 
  @Input() public columns: any[] = [];
  @Input() public propurl : string;
  @Input() public titulo : String;

  @ViewChild(DatatableComponent) table: DatatableComponent;

   urlendereco : string;

  constructor() {

  }

  ngOnInit() {
    this.getAll((data) => {
      this.registroSelecionado = [data[0]];
      this.dataSource = data;
      this.tempDataSource = [...data];
    });
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
}
