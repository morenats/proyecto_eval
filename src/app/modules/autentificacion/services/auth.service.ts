import { Injectable } from '@angular/core';
//servicio de autentificaion de firebase
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //referenciar auth de firebase para inicializarlo
  constructor(public auth:AngularFireAuth) { }




}
