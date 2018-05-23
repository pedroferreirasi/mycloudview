import {Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Seriado } from '../../model/multimidia/seriado.model';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css']
})
export class PesquisaSeriadoComponent implements OnInit {
  public data: Seriado[];
  public rowsOnPage: number = 10;
  public filterQuery: string = "";
  public sortBy: string = "";
  public sortOrder: string = "desc";

  rowsFilter = [];
  tempFilter = [];

  constructor(public http: Http) { }
   
  ngOnInit() {
    this.http.get(`http://pedroferreirasi.servehttp.com:8080/seriado/`)
    .subscribe((data)=> {
      this.data = data.json();
    });
  }
}
