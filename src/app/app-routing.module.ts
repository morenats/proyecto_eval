import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

const routes: Routes = [
  //ruta comun para ir al inicio
  {
    path:"",component:InicioComponent
  },
  //carga perezosa para ir al modulo de inicio
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  //carga perezosa para ir al modulo producto
  {
    path:"",loadChildren:()=>import('./modules/eventos/eventos.module').then(m=>m.EventosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
