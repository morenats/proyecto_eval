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
        foto:"../../../../../assets/destacados/elzar.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"concierto",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/ivannoble.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"concierto",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/ysya.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"concierto",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestafiebre.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"fiestas",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestaatp.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"fiestas",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestabatalladjs.jpg",
        alt:"el zar",
        nombre:"El zar",
        fecha:"6 de julio",
        tipo:"fiestas",
      },
    ]
  }
}
