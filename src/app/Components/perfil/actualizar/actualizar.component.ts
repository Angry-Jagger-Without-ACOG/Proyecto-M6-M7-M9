import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from 'src/app/servicios/profe-tools.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  nombre_Usuario: String;
  tipo_Usuario: String;

  profe: any = {
    nombre: null,
    apellido: null,
    correo: null,
    nombre_Usuario: null
  }

  constructor(private BD: ProfeToolsService) {}

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');
    this.profe.nombre_Usuario = this.nombre_Usuario;
  }

  cambiarDatos() {

    if (this.tipo_Usuario == "Profesor") {

      this.cambiarDatosProfe();

    } else if (this.tipo_Usuario == "Alumno") {

      this.cambiarDatosAlumno();

    }
  }

  cambiarDatosProfe() {
    this.BD.CambiosPerfilProfe(this.profe).subscribe(

    )
    this.UpdateCont();
  }

  cambiarDatosAlumno() {
    this.BD.CambiosPerfilAlumno(this.profe).subscribe(

    )
    this.UpdateCont();
  }

  UpdateCont(){
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

}
