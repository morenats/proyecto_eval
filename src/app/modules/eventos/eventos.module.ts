import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { ConciertosComponent } from './pages/conciertos/conciertos.component';
import { TeatroComponent } from './pages/teatro/teatro.component';
import { FiestasComponent } from './pages/fiestas/fiestas.component';


@NgModule({
  declarations: [
    ConciertosComponent,
    TeatroComponent,
    FiestasComponent
  ],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
