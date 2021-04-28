import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Tarea } from '../../../Models/Tarea.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-ranking',
  templateUrl: './modificar-ranking.component.html',
  styleUrls: ['./modificar-ranking.component.css']
})
export class ModificarRankingComponent implements OnInit {

  @Input() codigo_ranking:String;

  //Variables para indicar el tipo de usuario
  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}



  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if (this.tipo_Usuario == "Profesor") {
      this.Tipo = true;
      this.GetProfesor(this.nombre_Usuario);
    }
  }

  GetProfesor(nombre_Usuario) {
    console.log(this.codigo_ranking);
    this.BD.GetProfesor(nombre_Usuario).subscribe(
      result => this.usuario = result[0]
    );
  }


}
