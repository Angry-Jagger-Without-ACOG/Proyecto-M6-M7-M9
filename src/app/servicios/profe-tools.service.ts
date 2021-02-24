import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfeToolsService {

  URL = environment.serverUrl;

  constructor(private http: HttpClient) { }

  Insertar_Login(mote, contrasena) {
    return this.http.get(`${this.URL}LoginUsuario.php?mote=${mote}?contrasena=${contrasena}`);
  }

  listarusuarios() {
    return this.http.get(`${this.URL}SelectPrueba.php`);
  }

}
