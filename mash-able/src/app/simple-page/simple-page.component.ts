import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-simple-page',
  templateUrl: './simple-page.component.html',
  styleUrls: ['./simple-page.component.css']
})
export class SimplePageComponent implements OnInit {
  public data: any;
  public rowsOnPage: number = 10;
  public filterQuery: string = "";
  public sortBy: string = "";
  public sortOrder: string = "desc";
  public teste: string;

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get(`http://192.168.25.9:8080/seriado/`)
      .subscribe((data)=> {
        this.data = data.json();
      });
  }

}
