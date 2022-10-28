import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { UsuarioRountingModule } from './usuario.routing.module';



@NgModule({
  declarations: [UsuarioComponent],
  imports: [
    CommonModule,
    UsuarioRountingModule
  ]
})
export class UsuarioModule { }
