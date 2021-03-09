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

  URL = environment.serverUrl;
  cookies: any;

  constructor(private http: HttpClient) { }



    loginUsuario(login) {
      return this.http.post(`${this.URL}LoginUsuario.php`, JSON.stringify(login));
    }

    loginProfe(login) {
      return this.http.post(`${this.URL}LoginProfe.php`, JSON.stringify(login));
    }

    //token prueba
    setToken(token: String) {
      this.cookies.set("token", "token");
    }

    getToken() {
      return this.cookies.get("token");
    }

  // Faltaria introducir la imagen
  // RegistrarAlumno(nick,correo,contra,nombre,apellidos,curso){
  //   return this.http.get(`${this.URL}RegistroUsuario.php?nick=${nick}?correo=${correo}?
  //   contra=${contra}?nombre=${nombre}?apellidos=${apellidos}?curso=${curso}`);
  // }

  // Faltaria introducir la imagen
  // RegistrarProfesor(profesor){
  //   return this.http.post(`${this.URL}RegistroProfesor.php`,JSON.stringify(profesor));
  // }

  RegistrarProfesor(profesor) {
    return this.http.post(`${this.URL}RegistroProfesor.php`, JSON.stringify(profesor));
  }

  listarusuarios() {
    return this.http.get(`${this.URL}SelectPrueba.php`);
  }
  RegistroProfesor(user){
    return this.http.post(`${this.URL}RegistroProfesor.php`, JSON.stringify(user));
  }

  GetProfesor(nick){
    return this.http.get(`${this.URL}SelectProfesor.php?idUsuario=${nick}`)
  }

}
