import { Component, OnInit, ViewChild } from '@angular/core';
import { ListaComponent } from '../../commom/framework/lista/lista.component';
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

  public service : TorrentService;
  public titulo : string = "Torrent";
  public columns: any[] = [
    { name: "Torrent", prop: "torrentURL"},
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
