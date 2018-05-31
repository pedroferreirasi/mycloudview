import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: []
})
export class DashboardComponent {
    @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
    @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;
  
    rows = [
        {nome: "Jaderson", sobrenome: "Morais"},
        {nome: "Pedro", sobrenome: "Ferreira"},
    ];
    columns = [];
  
    constructor() {
    }
  
    ngOnInit() {
      this.columns = [
    { name: "Nome", prop: "nome"},
    { name: "Sobrenome", prop: "sobrenome"},
    {
        cellTemplate: this.editTmpl,
        headerTemplate: this.hdrTpl,
        name: 'Sexo'
      }];
    }
    
}