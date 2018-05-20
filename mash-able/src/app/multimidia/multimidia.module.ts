import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { MULTIMIDIA_ROUTES } from './multimidia.routing';
import { SharedModule } from "../shared/shared.module";
import { SeriadoComponent } from './seriado/seriado.component';
import { TorrentComponent } from './torrent/torrent.component';

@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(MULTIMIDIA_ROUTES),
      SharedModule
    ],
    declarations: [SeriadoComponent, TorrentComponent]
  })
export class MultimidiaModule {

}