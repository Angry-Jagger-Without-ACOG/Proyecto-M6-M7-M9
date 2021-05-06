import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import {Profesor} from 'src/app/Models/Profesor.model';



@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {

  ModoCambio: String = "Perfil";

  //Variables para indicar el tipo de usuario

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
 imagen : Blob;
 public ImgUrl = ' '

  usuario: object= {};

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
    console.log(btoa("usuario:img"));
  }


  GetAlumno(nombre_Usuario) {
    this.BD.GetAlumno(nombre_Usuario).subscribe(
      result => this.usuario = result[0]

    );

  }

  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
  }

}
