import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardsComponent } from './componentes/cards/cards.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';


@NgModule({
  declarations: [
    CardsComponent,
    InicioComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
