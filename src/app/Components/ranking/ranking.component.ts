import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../Models/Equipo.model';
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
  Lista_Equipos : Equipo[]= [];

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
    this.Lista_Equipos.push(new Equipo('R_Prueba1','Clasico',true));
    this.Lista_Equipos.push(new Equipo('R_Prueba2','Clasico',false));
    this.Lista_Equipos.push(new Equipo('R_Prueba3','Clasico',true));
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

  Cambiar_Opcion(op: String): void{
    this.ModoCambio = op;
  }

  BorrarRanking(i:number){

  }
}
