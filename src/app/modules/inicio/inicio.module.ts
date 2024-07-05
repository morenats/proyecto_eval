import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { DestacadosComponent } from './componentes/destacados/destacados.component';

//material
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatTabsModule
  ],
  exports: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent,
    MatTabsModule
  ]
})
export class InicioModule { }
