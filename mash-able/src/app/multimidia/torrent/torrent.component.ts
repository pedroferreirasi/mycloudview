import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ToastyService, ToastOptions, ToastData } from "ng2-toasty";
import { ListaComponent } from '../../framework/lista/lista.component';
import { Torrent } from '../../model/multimidia/torrent.model';
import { TorrentService } from '../../service/multimidia/torrent.service';
import { SeriadoService } from '../../service/multimidia/seriado.service';
import { Seriado } from '../../model/multimidia/seriado.model';
import { promise } from 'protractor';
import { reject, resolve } from 'q';

@Component({
  selector: 'pesquisa-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css'],
  providers: [TorrentService, SeriadoService]
})
export class TorrentComponent implements OnInit {

  @ViewChild(ListaComponent) listaGenerica: ListaComponent<Torrent>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;

  public service: SeriadoService;
  public serviceTorrent: TorrentService;
  public titulo: string = "Torrent";
  public columns: any[];
  public registroSelecionado = [];
  public selectionType: string = "multi";

  position: string = 'bottom-right';
  mensagem = {
    title: 'Default Toasty',
    msg: 'Atualização realizada com sucesso!',
    timeout: 5000,
    theme: 'default',
    position: 'bottom-right',
    type: 'success'
  };

  constructor(torrentService: TorrentService,
    serviceSeriado: SeriadoService,
    private toastyService: ToastyService) {
    this.service = serviceSeriado;
    this.serviceTorrent = torrentService;
  }

  ngOnInit() {
    this.columns = [
      { name: "Código", prop: "id", width: 120, sortable: true, resizeable: false, draggable: false, canAutoResize: false },
      { name: "Descrição", prop: "descricao", width: 400 },
      { name: "IMDB", prop: "imdbId" },
      { name: "Temporada", prop: "ultimaTemporada" },
      { name: "Episódio", prop: "ultimoEpisodio" },
      { name: "Ultima Atualização", prop: "dtUltimaAtualizacao" }
    ]
  }

  public selecionar(registroSelecionado) {
    this.registroSelecionado = registroSelecionado;
  }

  public sincronizar() {       
    this.registroSelecionado.forEach((entity) => {
      this.serviceTorrent.sincronizar(entity.id.toString());
    })
  }

  public sincronizarTodos() {
    this.serviceTorrent.sincronizarTodos().then((resolve) => {
      alert('Finalizado');
    });
  }

  public addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    let toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added!');
      },
      onRemove: (toast: ToastData) => {
        console.log('Toast ' + toast.id + ' has been added removed!');
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }
}
