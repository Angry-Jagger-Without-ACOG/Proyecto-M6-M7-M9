import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  // Componenetes de prueba
  Alumnos: Alumno[] = [];

  //Variable para indicar el tipo de usuario
  Tipo: boolean = false;

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    // Componenete de prueba
    this.Alumnos.push(new Alumno('Marc', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Fonsi', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Rosa', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('David', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Joel', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
    this.Alumnos.push(new Alumno('Susana', '', '', '', '', '', ''));
  }

}
