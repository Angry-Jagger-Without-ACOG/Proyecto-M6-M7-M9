import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from 'src/app/servicios/profe-tools.service';

@Component({
  selector: 'app-update-datos',
  templateUrl: './update-datos.component.html',
  styleUrls: ['./update-datos.component.css']
})
export class UpdateDatosComponent implements OnInit {


  profe: any = {

    nombre: null,
    apellido: null,
    correo: null,
    nombre_Usuario:null
  }

  nombre_Usuario: String;
  tipo_Usuario: String;

  constructor(private formBuilder: FormBuilder,private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    this.profe.nombre_Usuario = this.nombre_Usuario;



  }

  cambiarDatos(){

    if (this.tipo_Usuario == "Profesor") {

      this.cambiarDatosProfe();

    } else if (this.tipo_Usuario == "Alumno") {

      this.cambiarDatosAlumno();

    }
  }


  cambiarDatosProfe(){
    this.BD.CambiosPerfilProfe(this.profe).subscribe(

    )

    }

  cambiarDatosAlumno(){
      this.BD.CambiosPerfilAlumno(this.profe).subscribe(

      )

      }

}

