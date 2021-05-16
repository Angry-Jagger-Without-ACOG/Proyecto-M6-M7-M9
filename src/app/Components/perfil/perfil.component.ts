import { trigger } from '@angular/animations';
import { stripGeneratedFileSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { faHighlighter, faSquare, faTintSlash } from '@fortawesome/free-solid-svg-icons';
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
  codigoRanking: String;
  nombreRankingAlumno: Object;

  usuario: Object = {}

  ranking: any = {}

  selectRankings: any = {
    nombre:String,
    nombreProfesor: String
  }

  datosRanking: any = {
    nombreAlumno: String,
    apellidoAlumno: String,
    codigoRanking: String,
  }

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


    this.datosRanking.nombreAlumno = this.nombre_Usuario;
    this.datosRanking.codigoRanking = codigoRanking;
    this.datosRanking.apellidoAlumno = apellido;

    this.BD.selectRankingPorcodigo(codigoRanking).subscribe(
      result => this.datosRanking.nombre = result[0]
    );


    this.BD.selectComprobarTablaTarea(this.datosRanking).subscribe(
      datos => {
        if (datos['response'] == 'FAIL'){
          Swal.fire('No podes wachin','');
        }else{
          this.BD.insertTablaTarea(this.datosRanking).subscribe();
          this.BD.unirseRanking(this.datosRanking).subscribe();
           Swal.fire('Entraste wachin ', '');
        }
      }

    );

  }



  refresh(): void {
    window.location.reload();
  }

}
