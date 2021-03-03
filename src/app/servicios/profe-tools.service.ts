import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Profesor } from '../Models/Profesor.model';

@Injectable({
  providedIn: 'root'
})

export class ProfeToolsService {

  URL = environment.serverUrl;

  constructor(private http: HttpClient) { }

  Insertar_Login(mote, contrasena) {
    return this.http.get(`${this.URL}LoginUsuario.php?mote=${mote}?contrasena=${contrasena}`);
  }

  // Faltaria introducir la imagen
  RegistrarAlumno(nick,correo,contra,nombre,apellidos,curso){
    return this.http.get(`${this.URL}RegistroUsuario.php?nick=${nick}?correo=${correo}?
    contra=${contra}?nombre=${nombre}?apellidos=${apellidos}?curso=${curso}`);
  }

  // Faltaria introducir la imagen
  RegistrarProfesor(profesor: Profesor){
    return this.http.post(`${this.URL}RegistroProfesor.php`, profesor);
  }

  listarusuarios() {
    return this.http.get(`${this.URL}SelectPrueba.php`);
  }

}
