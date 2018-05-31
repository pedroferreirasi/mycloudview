import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { ListaComponent } from '../../framework/lista/lista.component';
import { Torrent } from '../../model/multimidia/torrent.model';
import { TorrentService } from './torrent.service';

@Component({
  selector: 'pesquisa-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.css'],
  providers: [TorrentService]
})
export class TorrentComponent implements OnInit {

  @ViewChild(ListaComponent) listaGenerica: ListaComponent<Torrent>;
  @ViewChild('editTmpl') editTmpl: TemplateRef<any>;
  @ViewChild('hdrTpl') hdrTpl: TemplateRef<any>;

  public service : TorrentService;
  public titulo : string = "Torrent";
  public columns: any[] = [
    {
      cellTemplate: this.editTmpl,
      headerTemplate: this.hdrTpl,
      name: 'Download'
    },
    { name: "Seriado", prop: "seriado.descricao"},
    { name: "IMDB", prop: "imdbId"},
    { name: "Temporada", prop: "temporada"},
    { name: "Episódio", prop: "episodio"},
    { name: "MB", prop: "sizeMega"}
  ]

  constructor(torrentService : TorrentService) {
    this.service = torrentService;
  }

  ngOnInit() {}
}
