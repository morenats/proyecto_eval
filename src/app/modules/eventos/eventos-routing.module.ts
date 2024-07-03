import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeatroComponent } from './pages/teatro/teatro.component';
import { ConciertosComponent } from './pages/conciertos/conciertos.component';
import { FiestasComponent } from './pages/fiestas/fiestas.component';

const routes: Routes = [
  {
    path:"teatro",component:TeatroComponent
  },
  {
    path:"conciertos",component:ConciertosComponent
  },
  {
    path:"fiestas",component:FiestasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
