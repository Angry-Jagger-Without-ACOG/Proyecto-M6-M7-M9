import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Profesor } from '../Models/Profesor.model';
import { Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})

export class ProfeToolsService {

  cookies: any;
  datos: Object;
  vsession: String;

  constructor(private http: HttpClient) { }



  loginUsuario(login) {
    return this.http.post(`${environment.serverUrl}LoginUsuario.php`, JSON.stringify(login));
  }

  loginProfe(login) {
    return this.http.post(`${environment.serverUrl}LoginProfe.php`, JSON.stringify(login));
  }

  RegistrarProfesor(profesor) {
    return this.http.post(`${environment.serverUrl}RegistroProfesor.php`, JSON.stringify(profesor));
  }

  listarusuarios() {
    return this.http.get(`${environment.serverUrl}SelectPrueba.php`);
  }

  RegistroAlumno(alumno) {
    return this.http.post(`${environment.serverUrl}RegistroUsuario.php`, JSON.stringify(alumno));
  }

  GetProfesor(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectProfesor.php`, JSON.stringify(nombre_Usuario));
  }

  GetAlumno(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectAlumno.php`, JSON.stringify(nombre_Usuario));
  }



  CambiosPerfilProfe(update) {

    return this.http.put(`${environment.serverUrl}UpdateProfesor.php`, JSON.stringify(update));
  }

  CambiosPerfilAlumno(update) {
    return this.http.put(`${environment.serverUrl}UpdateUsuario.php`, JSON.stringify(update));
  }

  cambiarContraseñaAlumno(profesor) {

    return this.http.put(`${environment.serverUrl}UpdatePasswordAlumno.php`, JSON.stringify(profesor));

  }

  cambiarContraseñaProfesor(profesor) {

    return this.http.put(`${environment.serverUrl}UpdatePasswordProfesor.php`, JSON.stringify(profesor));

  }



  //token prueba
  setToken(token: String) {
    this.cookies.set("token", "token");
  }

  getToken() {
    return this.cookies.get("token");
  }

  getDatos(): any {
    return this.datos;
  }

  setDatos(usuario): any {
    this.datos = usuario;
  }
  borrarDatos(): any {
    this.datos = "";
  }
  setSession(session): any {
    this.vsession = session;
  }
  getSession() {
    return this.vsession;
  }
}

