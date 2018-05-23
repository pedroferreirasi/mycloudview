import {Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Seriado } from '../../model/multimidia/seriado.model';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css']
})
export class PesquisaSeriadoComponent implements OnInit {
  
  public rowsOnPage : number = 10;
  rows = [];

  selected = [];

  columns: any[] = [];

  constructor() {
    this.fetch((data) => {
      this.selected = [data[0]];
      this.rows = data;
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

  onSelect({ selected }) { }

  onActivate(event) {}
}
