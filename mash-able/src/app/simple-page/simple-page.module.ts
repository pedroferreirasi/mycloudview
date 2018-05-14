import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import { SimplePageComponent } from './simple-page.component';
import {SimplePageRoutes} from "./simple-page.routing";
import {SharedModule} from "../shared/shared.module";
import { SeriadoComponent } from "../multimidia/seriado/seriado.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SimplePageRoutes),
    SharedModule
  ],
  declarations: [SimplePageComponent, SeriadoComponent]
})
export class SimplePageModule { }
