import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados.component';
import { EstadosRountingModule } from './estados.routing.module';



@NgModule({
  declarations: [
    EstadosComponent
  ],
  imports: [
    CommonModule,
    EstadosRountingModule
  ]
})
export class EstadosModule { }
