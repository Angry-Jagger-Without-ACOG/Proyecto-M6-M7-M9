import { Component, OnInit } from '@angular/core';
import { Ranking } from '../../Models/Ranking.model';
import { Tarea } from '../../Models/Tarea.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent implements OnInit {

  ModoCambio: String = "RC";

  //Variables para indicar el tipo de usuario
  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}

  //Variable Ejemplo
  Rankings: Ranking[] = [];

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if (this.tipo_Usuario == "Profesor") {
      this.Tipo = true;
      this.GetProfesor(this.nombre_Usuario);
    } else if (this.tipo_Usuario == "Alumno") {
      this.Tipo = false;
      this.GetAlumno(this.nombre_Usuario);
    }

    //Ejemplos
    this.Rankings.push(new Ranking());
    this.Rankings.push(new Ranking());
  }

  GetProfesor(nombre_Usuario) {
    this.BD.GetProfesor(nombre_Usuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  GetAlumno(nombre_Usuario) {
    this.BD.GetAlumno(nombre_Usuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

  BorrarRanking(i: number) {

  }
}
