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

  datos: any = {

    nick: null,
    password: null,
    correo: null,
    nombre: null,
    apellido: null,
    curso: null,
    centro: null,
    nombre_Usuario: null
  }

  usuarios: any = {

    nick: null,
    nombre: null,
    apellido: null,
    correo: null,
    nombre_Usuario: null
  }


  constructor(private BD: ProfeToolsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {


    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');
    this.usuarios.nombre_Usuario = this.nombre_Usuario;

    if (this.tipo_Usuario == "Profesor") {
      this.GetProfesor(this.nombre_Usuario);

    } else if (this.tipo_Usuario == "Alumno") {

       this.GetAlumno(this.nombre_Usuario);

    }

   this.usuario = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]]
    });
  }

  get data() {
    return this.usuario.controls;
  }

  cambiarDatos() {

    if (this.tipo_Usuario == "Profesor") {

      this.cambiarDatosProfe();

    } else if (this.tipo_Usuario == "Alumno") {

      this.cambiarDatosAlumno();

    }
  }

  cambiarDatosProfe() {
    this.BD.CambiosPerfilProfe(this.usuarios).subscribe(
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
    this.BD.CambiosPerfilAlumno(this.usuarios).subscribe(
      datos => {
        if (datos['response'] == 'OK') {
          this.UpdateCont();
        } else {
          Swal.fire('Error', '');
        }
      }
    )

  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  GetProfesor(nombre_Usuario) {
    this.BD.GetProfesor(nombre_Usuario).subscribe(
      result => this.datos = result[0]


    );
  }

  GetAlumno(nombre_Usuario) {
    this.BD.GetAlumno(nombre_Usuario).subscribe(
      result => this.datos = result[0]

    );
  }


}
