import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  //este hide es para el input de contraseña 
  hide = true;

   //IMPORTACION DE LA INTERFAZ
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: '',
  }
  //COLLECCION QUE SOLO RECIBE OBJETOS DEL TIPO USUARIOS
  coleccionusuarios: Usuario[] = [];


  async registrar(){

  }


}
