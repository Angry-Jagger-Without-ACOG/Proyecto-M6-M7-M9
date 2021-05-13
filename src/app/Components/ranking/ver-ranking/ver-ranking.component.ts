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

  codigo: String;
  nombreRanking: String;
  tarea_Name:String;
  puntuacion: String;

  Usuario: Object = {
    Nombre: String,
    Apellido: String,
    Profesor: String
  }

  SelectTareas: any = {
    nombreRanking: String,
    nombreTarea: String
  }

  PuntuacionNueva : any = {
    nombreRanking: String,
    puntuacionRanking: Number,
    nombreAlumno: String,
    Tarea: String

  }


  Tareas: Tarea[] = [];

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    this.codigo = this.BD.getCodigo();
    this.nombreRanking = this.BD.getRanking();

    console.log(this.codigo,this.nombreRanking);


    this.SelectRanking();
  }

  SelectRanking() {
    this.tarea_Name = "Puntuacion Total";
    this.BD.selectRankingOrdenPuntuacion(this.nombreRanking).subscribe(
      result => this.Usuario = result
    )
  }

  UpdateCont() {
    this.refresh();
  }

  // Supongo que aparte de pasar el nombre de la tarea , tambien tendria que actualizar los datos
  NombreTarea(nombreTarea:string){

    this.tarea_Name = nombreTarea;
    this.SelectTareas.nombreRanking = this.nombreRanking;
    this.SelectTareas.nombreTarea = nombreTarea;

    this.BD.enviarNombreTarea(this.SelectTareas).subscribe(
      result => this.Usuario = result
    )

  }

  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }


  refresh(): void {
    window.location.reload();
  }

}
