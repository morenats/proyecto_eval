import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { DestacadosComponent } from './componentes/destacados/destacados.component';


@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
