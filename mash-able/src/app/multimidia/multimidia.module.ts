import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MULTIMIDIA_ROUTES } from './multimidia.routing';
import { SharedModule } from "../shared/shared.module";
import { TorrentComponent } from './torrent/torrent.component';
import { PesquisaSeriadoComponent } from './pesquisaseriado/pesquisaseriado.component';
import { CadastroSeriadoComponent } from './cadastroseriado/cadastroseriado.component';
import { ListaComponent } from '../commom/framework/lista/lista.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MULTIMIDIA_ROUTES),
      SharedModule
    ],
    declarations: [TorrentComponent, PesquisaSeriadoComponent, CadastroSeriadoComponent, ListaComponent]
  })
export class MultimidiaModule {

}