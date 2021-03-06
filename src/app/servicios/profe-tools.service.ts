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

  public login(user) {
    return this.http.post<User>('http://localhost:8080' + '/LoginUsuario.php', JSON.stringify(user))
    }

    loginUsuario(login) {
      return this.http.post(`${this.URL}LoginUsuario.php`, JSON.stringify(login));
    }

    //token prueba
    setToken(token: String) {
      this.cookies.set("token", "token");
    }

    getToken() {
      return this.cookies.get("token");
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
