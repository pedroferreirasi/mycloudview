import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { GenericoService } from '../../framework/servico/generico.service';
import { Torrent } from '../../model/multimidia/torrent.model';

@Injectable()
export class TorrentService extends GenericoService<Torrent>  {

    constructor(public http : Http) {
        super(http);
        this.funcionalidade = "torrent/";
    }

    public sincronizar(lista : Torrent[]) {
        lista.forEach((entity) => {
            this.getGenrico("torrent/API/download/" + entity.id.toString());
        }) 
    }

    public sincronizarTodos() : Promise<Torrent[]> {
        return this.getGenrico("torrent/API/download/");
    }

}