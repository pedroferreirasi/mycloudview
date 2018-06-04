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

    public sincronizar(id : String) : Promise<any[]> {
        return this.getGenrico("torrent/API/download/" + id);        
    }

    public sincronizarTodos() : Promise<Torrent[]> {
        return this.getGenrico("torrent/API/download/");
    }

}