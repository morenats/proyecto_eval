import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CarruselComponent } from './componentes/carrusel/carrusel.component';
import { DestacadosComponent } from './componentes/destacados/destacados.component';

//material
import {MatTabsModule} from '@angular/material/tabs';
import { FotosComponent } from './componentes/fotos/fotos.component';

//angular
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

@NgModule({
  declarations: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent,
    FotosComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatTabsModule,
    NgxPaginationModule
  ],
  exports: [
    InicioComponent,
    CarruselComponent,
    DestacadosComponent,
    MatTabsModule,
    NgxPaginationModule
  ]
})
export class InicioModule { }
