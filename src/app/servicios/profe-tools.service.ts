import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfeToolsService {

  constructor(private http: HttpClient) { }

  prueba() {
    return this.http.get('${this.URL}SelectPrueba.php');
  }



}
