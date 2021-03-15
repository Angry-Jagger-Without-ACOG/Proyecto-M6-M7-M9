import { Component, OnInit} from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
import { environment } from 'src/environments/environment';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { result } from 'lodash';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  Profesores: Profesor[] = [];
  Alumnos: Alumno[] = [];
  ModoCambio : boolean= false;

  //Variable para indicar el tipo de usuario
  Tipo: boolean = true;
  usuarios = null;
  tipo_Usuario: String;
  nombre_Usuario: String;

  nombre: string;
  apellido: string;
  password: string;
  email: string;

  usuario: any = {

    nick: null,
    password: null,
    correo: null,
    nombre: null,
    apellido: null,
    curso: null,
    centro: null

  }


  constructor(private BD: ProfeToolsService,public router: Router) { }

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

  Cambiar_Contra(op: boolean): void{
    this.ModoCambio = op;
  }





  Cambiar_Datos() {
    this.router.navigate(['Datos']);
  }

}
