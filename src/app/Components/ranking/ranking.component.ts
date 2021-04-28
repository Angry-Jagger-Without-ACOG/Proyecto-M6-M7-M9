import { Component, OnInit } from '@angular/core';
import { Ranking } from '../../Models/Ranking.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';

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
  codigo:String;

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

  BorrarRanking(codigo: String) {
    Swal.fire({
      title: 'Estas seguro de borrar este ranking?',
      text: "No podras recuperar este Ranking!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

      //////////////////////////////////////////////////////////
      // Funcion encargada de borrar los rankings selecionados//
      //////////////////////////////////////////////////////////

        Swal.fire(
          'Borrado sin problemas'
        )
      }
    })
  }

}
