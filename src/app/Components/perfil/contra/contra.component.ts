import { Component, OnInit ,Output, EventEmitter  } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Profesor } from 'src/app/Models/Profesor.model';
import { Alumno } from 'src/app/Models/Alumno.model';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent implements OnInit {

  @Output() volver = new EventEmitter<boolean>();

  nombre_Usuario: String;
  tipo_Usuario: String;

  profesor: any ={
    nombre_Usuario: null,
    password: null,
    password2: null,
    password3: null

  }

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    this.profesor.nombre_Usuario = this.nombre_Usuario;


  }

  cambiarDatos(){

    if (this.tipo_Usuario == "Profesor") {

      this.cambiarPasswordProfe();

    } else if (this.tipo_Usuario == "Alumno") {

      this.cambiosPasswordAlumno();

    }
  }

  cambiarPasswordProfe(){
    this.BD.cambiarContraseñaProfesor(this.profesor).subscribe(

    )
    this.UpdateCont();
  }

  cambiosPasswordAlumno(){
    this.BD.cambiarContraseñaAlumno(this.profesor).subscribe(

      )
      this.UpdateCont();
  }


  UpdateCont(){

    this.volver.emit(false);
  }

}
