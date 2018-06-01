import { Component, OnInit, Injectable } from '@angular/core';

import { GenericoService } from '../../framework/servico/generico.service';
import { Http } from '@angular/http';
import { Torrent } from '../../model/multimidia/torrent.model';

@Injectable()
export class TorrentService extends GenericoService<Torrent>  {

    constructor(public http : Http) {
        super(http);
        this.funcionalidade = "torrent/";
    }

    public sincronizar() : Promise<Torrent[]> {
        return this.getGenrico("torrent/API/download/");
    }

    public sincronizarTodos() : Promise<Torrent[]> {
        return this.getGenrico("torrent/API/download/");
    }

}