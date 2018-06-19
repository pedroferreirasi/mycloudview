import { Component, OnInit } from '@angular/core';

import { Seriado } from '../../../model/multimidia/seriado.model';
import { SeriadoService } from '../../../service/multimidia/seriado.service'

@Component({
  selector: 'app-cadastroseriado',
  templateUrl: './cadastroseriado.component.html',
  styleUrls: ['./cadastroseriado.component.css'],
  providers: [SeriadoService]
})
export class CadastroSeriadoComponent implements OnInit {

  public entity : Seriado;
  private service : SeriadoService;

  constructor(entity : Seriado, service : SeriadoService) { 
    this.entity = entity;
    this.service = service;
  }

  ngOnInit() {
  }

  public salvar() {
    console.log('salvar inicio');
    this.entity.id = null;
    this.entity.descricao = 'teste';
    this.entity.ativo = true;
    this.entity.imdbId = '242342';
    this.entity.dtUltimaAtualizacao = null;
    this.entity.ultimoEpisodio = null;
    this.service.save(this.entity);
    console.log('salvar fim');
  }

}
