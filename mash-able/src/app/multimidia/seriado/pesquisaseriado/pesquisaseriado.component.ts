import { Component, OnInit, ViewChild } from '@angular/core';

import { ListaComponent } from '../../../framework/lista/lista.component';
import { Seriado } from '../../../model/multimidia/seriado.model';
import { SeriadoService } from '../../../service/multimidia/seriado.service';

import swal from 'sweetalert2';

@Component({
  selector: 'pesquisa-seriado',
  templateUrl: './pesquisaseriado.component.html',
  styleUrls: ['./pesquisaseriado.component.css'],
  providers: [SeriadoService]
})
export class PesquisaSeriadoComponent implements OnInit {

  @ViewChild(ListaComponent) listaGenerica: ListaComponent<Seriado>;

  public selectionType : string = "single";
  public service : SeriadoService;
  public titulo : string = "Seriado";
  public columns: any[] = [
    { name: "Código", prop: "id", width: 120, sortable: true, resizeable: false, draggable: false, canAutoResize: false},
    { name: "Descrição", prop: "descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Ativo", prop: "ativo"},
    { name: "Atualizado", prop: "dtUltimaAtualizacao"}
  ]

  constructor(seriadoService : SeriadoService) {
    this.service = seriadoService;
  }

  ngOnInit() {}

  public openSuccessCancelSwal() {
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
