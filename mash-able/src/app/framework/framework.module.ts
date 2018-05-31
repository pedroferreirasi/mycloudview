import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

//import { MULTIMIDIA_ROUTES } from './multimidia.routing';
import { SharedModule } from "../shared/shared.module";
import { ListaComponent } from '../framework/lista/lista.component';

@NgModule({
    imports: [
      CommonModule,
      //RouterModule.forChild(MULTIMIDIA_ROUTES),
      SharedModule
    ],
    declarations: [ListaComponent],
    exports: [ListaComponent]
  })
export class FrameworkModule {

}