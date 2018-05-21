import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from "@swimlane/ngx-datatable";
import { Http, Response } from '@angular/http';

@Component({
    selector: 'pesquisa-seriado',
    templateUrl: './seriado.component.html'
})
export class SeriadoComponent implements OnInit {
  public data: any;
  public rowsOnPage: number = 10;
  public filterQuery: string = "";
  public sortBy: string = "";
  public sortOrder: string = "desc";

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`http://pedroferreirasi.servehttp.com:8080/seriado/`)
      .subscribe((data)=> {
        this.data = data.json();
      });
  }
}