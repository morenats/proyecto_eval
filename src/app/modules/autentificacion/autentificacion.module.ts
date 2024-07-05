import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
// componentes de material
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

//componentes de angular
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IniciosesionComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //angular
    FormsModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    //material
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    //angular
    FormsModule
  ]
})
export class AutentificacionModule { }
