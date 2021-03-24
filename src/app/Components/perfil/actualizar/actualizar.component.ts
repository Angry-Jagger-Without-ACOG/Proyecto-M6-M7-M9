import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from 'src/app/servicios/profe-tools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  nombre_Usuario: String;
  tipo_Usuario: String;
  usuario: FormGroup;
  datos: any = {}

  Datos_Usuario: any = {
    nombre: null,
    apellido: null,
    correo: null,
    nombre_Usuario: null
  }

  constructor(private BD: ProfeToolsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if (this.tipo_Usuario == "Profesor") {
      this.GetProfesor(this.nombre_Usuario);
    }

    else if (this.tipo_Usuario == "Alumno") {
      this.GetAlumno(this.nombre_Usuario);
    }

    this.usuario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(20), Validators.pattern('[a-zA-Z]*[^[\s]{0}[a-zA-Z]*]?')]],
      apellido: ['', [Validators.required, Validators.minLength(2),
      Validators.maxLength(20), Validators.pattern('[a-zA-Z]*[^[\s]{0}[a-zA-Z]*]?')]],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  get data() {
    return this.usuario.controls;
  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  cambiarDatos() {
    if (this.tipo_Usuario == "Profesor") {
      this.cambiarDatosProfe();
    }

    else if (this.tipo_Usuario == "Alumno") {
      this.cambiarDatosAlumno();
    }
  }

  cambiarDatosProfe() {

    //Paso de datos del FromGroup y el nick del usuario a un Objeto para el update,
    //ya que el formgroup no cuenta con todos los campos
    this.Datos_Usuario.nombre = this.usuario.controls.nombre.value;
    this.Datos_Usuario.apellido = this.usuario.controls.apellido.value;
    this.Datos_Usuario.correo = this.usuario.controls.correo.value;
    this.Datos_Usuario.nombre_Usuario = this.nombre_Usuario;

    this.BD.CambiosPerfilProfe(this.Datos_Usuario).subscribe(
      datos => {
        if (datos['response'] == 'OK') {
          this.UpdateCont();
        } else {
          Swal.fire('Error', '');
        }
      }
    )
  }

  cambiarDatosAlumno() {

    //Paso de datos del FromGroup y el nick del usuario a un Objeto para el update,
    //ya que el formgroup no cuenta con todos los campos
    this.Datos_Usuario.nombre = this.usuario.controls.nombre.value;
    this.Datos_Usuario.apellido = this.usuario.controls.apellido.value;
    this.Datos_Usuario.correo = this.usuario.controls.correo.value;
    this.Datos_Usuario.nombre_Usuario = this.nombre_Usuario;

    console.log(this.Datos_Usuario)
    this.BD.CambiosPerfilAlumno(this.Datos_Usuario).subscribe(
      datos => {
        if (datos['response'] == 'OK') {
          this.UpdateCont();
        } else {
          Swal.fire('Error', '');
        }
      }
    )
  }

  GetProfesor(nombre_Usuario) {
    this.BD.GetProfesor(nombre_Usuario).subscribe(
      result => {
        this.datos = result[0];
        // this.usuario.controls.nombre.setValue(this.datos['nombre']);
        this.usuario.setValue({
          'nombre': this.datos['nombre'],
          'apellido': this.datos['apellido'],
          'correo': this.datos['email']
        });
      }
    );
  }

  GetAlumno(nombre_Usuario) {
    this.BD.GetAlumno(nombre_Usuario).subscribe(
      result => {
        this.datos = result[0];
        // this.usuario.controls.nombre.setValue(this.datos['nombre']);
        this.usuario.setValue({
          'nombre': this.datos['nombre'],
          'apellido': this.datos['apellido'],
          'correo': this.datos['email']
        });
      }
    );
  }

}
