import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Profesor } from '../Models/Profesor.model';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class ProfeToolsService {

  cookies: any;
  datos: Object;
  vsession: String;

  constructor(private http: HttpClient) { }



  loginUsuario(login) {
    return this.http.post(`${environment.serverUrl}LoginAlumno.php`, JSON.stringify(login));
  }

  loginProfe(login) {
    return this.http.post(`${environment.serverUrl}LoginProfe.php`, JSON.stringify(login));
  }

  insertImagen(profesor: FormGroup) {
    const formData = new FormData();
    const nombreid = new FormData();

    //  formData.set('String', profesor.get('nick_p').value);
     formData.set('file', profesor.get('imgSource').value);

    return this.http.post(`${environment.serverUrl}InsertImagen.php`, formData);
  }
  registroProfesor(profesor){
  return this.http.post(`${environment.serverUrl}registroProfesor.php`,JSON.stringify(profesor));
  }

  listarusuarios() {
    return this.http.get(`${environment.serverUrl}SelectPrueba.php`);
  }

  RegistroAlumno(alumno) {
    return this.http.post(`${environment.serverUrl}RegistroAlumno.php`, JSON.stringify(alumno));
  }

  GetProfesor(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectProfesor.php`, JSON.stringify(nombre_Usuario));
  }

  GetAlumno(nombre_Usuario) {
    return this.http.post(`${environment.serverUrl}SelectAlumno.php`, JSON.stringify(nombre_Usuario));
  }
  verImagen(){

  }



  CambiosPerfilProfe(update) {
    return this.http.put(`${environment.serverUrl}UpdateProfesor.php`, JSON.stringify(update));
  }

  CambiosPerfilAlumno(update) {
    return this.http.put(`${environment.serverUrl}UpdateAlumno.php`, JSON.stringify(update));
  }

  cambiarContraseñaAlumno(profesor) {

    return this.http.put(`${environment.serverUrl}UpdatePasswordAlumno.php`, JSON.stringify(profesor));

  }

  cambiarContraseñaProfesor(profesor) {
    return this.http.put(`${environment.serverUrl}updatePasswordProfesor.php`, JSON.stringify(profesor));

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

