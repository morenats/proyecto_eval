import { Component } from '@angular/core';
import { Destacados } from 'src/app/models/destacados';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.css']
})
export class DestacadosComponent {
  //propiedad publica
  public info: Destacados[];
//inicializar la propiedad
  constructor(){
    this.info = [
      {
        id:"",
        foto:"",
        alt:"",
        nombre:"",
        fecha:""
      },
    ]
  }
}
