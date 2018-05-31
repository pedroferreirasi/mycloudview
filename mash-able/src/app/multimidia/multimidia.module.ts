import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MULTIMIDIA_ROUTES } from './multimidia.routing';
import { SharedModule } from "../shared/shared.module";
import { TorrentComponent } from './torrent/torrent.component';
import { PesquisaSeriadoComponent } from './seriado/pesquisaseriado/pesquisaseriado.component';
import { CadastroSeriadoComponent } from './seriado/cadastroseriado/cadastroseriado.component';

import { FrameworkModule } from '../framework/framework.module';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MULTIMIDIA_ROUTES),
      SharedModule,
      FrameworkModule
    ],
    declarations: [TorrentComponent, PesquisaSeriadoComponent, CadastroSeriadoComponent]
  })
export class MultimidiaModule {

}