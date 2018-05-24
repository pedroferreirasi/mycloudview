import {Component, OnInit, ViewChild } from '@angular/core';
import { Http, Response } from '@angular/http';

import {DatatableComponent} from "@swimlane/ngx-datatable";
import { Seriado } from '../../model/multimidia/seriado.model';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css']
})
export class PesquisaSeriadoComponent implements OnInit {
  
  public rowsOnPage : String = "10";
  rows = [];
  rowsAux = [];

  selected = [];

  columns: any[] = [];

  constructor() {
    this.fetch((data) => {
      this.selected = [data[0]];
      this.rows = data;
      this.rowsAux = data;
    });
  }

  ngOnInit() {}

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `http://pedroferreirasi.servehttp.com:8080/seriado/`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  /*updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.tempFilter.filter(function(d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }*/

  alterarLimit(evento : KeyboardEvent) {
    this.rowsOnPage = (<HTMLInputElement>evento.target).value;    
    //this.rows = [];
    //this.rows = this.rowsAux;
    window.dispatchEvent(new Event('resize'));
  }

  onSelect({ selected }) { }

  onActivate(event) {}
}
