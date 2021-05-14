import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { faHighlighter, faTintSlash } from '@fortawesome/free-solid-svg-icons';
import { result } from 'lodash';
import Swal from 'sweetalert2';
import { ProfeToolsService } from '../../servicios/profe-tools.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  ModoCambio: String = "Perfil";

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  apellidoAlumno: String;
  nombreRanking: any;

  usuario: Object = {}

  ranking: any = {}

  macagoendios: any = {}

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

  comprobarRanking(codigoRanking: String,apellido: String){

    this.ranking.nombreAlumno = this.nombre_Usuario;
    this.ranking.apellidoAlumno = apellido;

    this.BD.comprobarRanking(codigoRanking).subscribe(
      result => this.ranking = result
    )

    console.log(this.ranking);

    this.BD.unirseRanking(this.ranking).subscribe();

  }


  refresh(): void {
    window.location.reload();
  }

}
