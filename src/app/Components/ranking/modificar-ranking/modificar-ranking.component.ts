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

  codigo: String;
  nombreRanking: String;
  tarea_name:String;
  puntuacion: String;
  puntuacionRanking: Number;

  Usuario: Object = {
    Nombre: String,
    Apellido: String,
    Profesor: String
  }

  SelectTareas: any = {
    nombreRanking: String,
    nombreTarea: String
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
    this.tarea_name = "Puntuacion Total";
    this.BD.selectTareas(this.nombreRanking).subscribe(
      result => this.Usuario = result
    )
  }

  UpdateCont() {
    this.refresh();
  }

  // Supongo que aparte de pasar el nombre de la tarea , tambien tendria que actualizar los datos
  NombreTarea(nombreTarea:string){

    this.tarea_name = "Puntuacion "+nombreTarea;
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
    console.log(nuevaPuntuacion, nombre);

  }

  refresh(): void {
    window.location.reload();
  }

}
