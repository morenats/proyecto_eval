import { Component } from '@angular/core';
import { Paginacion } from 'src/app/models/paginacion';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent { 

    public coleccion: Paginacion[];
    
    constructor(){
      this.coleccion = [
        {
          uid:"",
          foto:"",
          alt:""
        },
        {
          uid:"",
          foto:"",
          alt:""
        },
        {
          uid:"",
          foto:"",
          alt:""
        },
        {
          uid:"",
          foto:"",
          alt:""
        },
      ]
    }
    p: number = 4;
}
