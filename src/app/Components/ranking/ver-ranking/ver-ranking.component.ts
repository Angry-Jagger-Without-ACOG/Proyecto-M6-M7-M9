import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Tarea } from '../../../Models/Tarea.model';

@Component({
  selector: 'app-ver-ranking',
  templateUrl: './ver-ranking.component.html',
  styleUrls: ['./ver-ranking.component.css']
})
export class VerRankingComponent implements OnInit {

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}

// El objeto tiene que tener los campos: nick , nommbre, apellido, y la puntuacion del ranking
// al hacer el select ordenar por puntuacion

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

  }


}
