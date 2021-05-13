import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Tarea } from '../../../Models/Tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-ranking',
  templateUrl: './modificar-ranking.component.html',
  styleUrls: ['./modificar-ranking.component.css']
})
export class ModificarRankingComponent implements OnInit {

  @Input() codigo_ranking: String;

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}
  Tarea = 10;

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

    this.SelectRanking();
  }

  SelectRanking() {
    this.tarea_Name = "Puntuacion Total";
    this.BD.selectTareas(this.nombreRanking).subscribe(
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

  modificarPuntuacion(nuevaPuntuacion: Number,nombre: String){

    this.PuntuacionNueva.nombreRanking = this.nombreRanking;
    this.PuntuacionNueva.Tarea = this.tarea_Name;
    this.PuntuacionNueva.puntuacionRanking = nuevaPuntuacion;
    this.PuntuacionNueva.nombreAlumno = nombre;

    this.BD.actualizarPuntuacionNueva(this.PuntuacionNueva).subscribe(

    )
  }

  anadirTarea(){
    this.Tarea = this.Tarea +1;
    console.log(this.Tarea);

  }

  refresh(): void {
    window.location.reload();
  }

}
