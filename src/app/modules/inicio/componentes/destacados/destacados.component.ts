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
        alt:"Ivan Noble",
        nombre:"Ivan Noble",
        fecha:"8 de julio",
        tipo:"concierto",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/ysya.jpg",
        alt:"YSY A",
        nombre:"YSY A",
        fecha:"1 de agosto",
        tipo:"concierto",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestafiebre.jpg",
        alt:"fieta fiebre de clasicos",
        nombre:"Fiesta fiebre de clasicos",
        fecha:"8 de julio",
        tipo:"fiesta",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestaatp.jpg",
        alt:"ATP",
        nombre:"ATP",
        fecha:"12 de julio",
        tipo:"fiesta",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/fiestabatalladjs.jpg",
        alt:"batalla de djs",
        nombre:"Batalla de djs",
        fecha:"12 de julio",
        tipo:"fiesta",
      },
      {
        id:"",
        foto:"../../../../../assets/destacados/historiaymujeres.jpg",
        alt:"historia y mujeres",
        nombre:"Historia y mujeres",
        fecha:"4 de octubre",
        tipo:"teatro",
      },
      
    ]
  }
}
