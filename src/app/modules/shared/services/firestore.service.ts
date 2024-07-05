import { Injectable } from '@angular/core';
//accedemos a la carpeta de angularfirestore sistema de colleciones para crearlas y subirlas
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
//la idea es que respete la siguiente interfaz
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  // definimos una coleccion de usuarios de firestore PRIVADA 
  //respetara la estructura de datos de la interfaz de usuarios
  private usuariosCollection: AngularFirestoreCollection<Usuario>

  constructor(private database: AngularFirestore) { 
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  agregarUsuario(usuario: Usuario, id: string){
    return new Promise(async (resolve, reject)=> {
      try{
        usuario.uid = id;
        //const resultado = coleccion de usuarios, envia como documento el UID
        //y setea la informaciom quie ingresemos en el REGISTRO
        const resultado = await this.usuariosCollection.doc(id).set(usuario)
        resolve(resultado)
        //bloque CATCH encapsula una falla y la vuelve un error
      }catch(error){
        reject (error);
      }
    })

  }
}
