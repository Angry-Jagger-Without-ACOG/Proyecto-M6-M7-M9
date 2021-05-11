import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Tarea } from '../../../Models/Tarea.model';
import Swal from 'sweetalert2';
import { result } from 'lodash';

@Component({
  selector: 'app-modificar-ranking',
  templateUrl: './modificar-ranking.component.html',
  styleUrls: ['./modificar-ranking.component.css']
})
export class ModificarRankingComponent implements OnInit {

  @Input() codigo_ranking:String;

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}

  codigo: String;
  ranking: String;

  Usuario: Object = {
    Nombre: String,
    Apellido: String,
    Profesor: String
  }

  Tareas: Tarea[] = [];

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    this.codigo =  this.BD.getCodigo();
    this.ranking = this.BD.getRanking();
    console.log(this.codigo,this.ranking);

    this.SelectRanking()

  }

  SelectRanking(){
    this.BD.selectTareas(this.ranking).subscribe(
      result => this.Usuario = result
    )
  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

}
