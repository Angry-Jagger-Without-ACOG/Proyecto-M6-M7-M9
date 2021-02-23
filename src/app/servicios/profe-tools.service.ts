import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class ProfeToolsService {


  constructor(private http: HttpClient) {

   }

  Insertar_Login(mote,contrasena) {
    return this.http.get('${this.URL}LoginUsuario.php?mote=${mote}?contrasena=${contrasena}');
  }



}
