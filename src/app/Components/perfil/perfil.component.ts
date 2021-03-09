import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  Profesores: Profesor[] = [];
  Alumnos: Alumno[] = [];

  //Variable para indicar el tipo de usuario
  Tipo: boolean = true;

  perfil = new Profesor();
  usuarios = null;

  usuario = {

    nick: null,
    password: null,
    correo: null,
    nombre: null,
    apellido: null,
    centro: null,
    img: null

  }

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    // this.GetProfesor(this.usuario);
  }


  // GetProfesor(nick) {
  //   this.BD.GetProfesor(nick).subscribe(
  //     result => this.usuario = result[0]
  //   );

  // }

  Cambiar_Contra() {

    if (this.Tipo == true) {
      // Formulario Profesor
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4']
      }).queue([
        {
          title: 'Nombre',
          text: 'Estar seguro de que quieres este nombre?'
        },
        {
          title: 'Apellidos',
          text: 'Estar seguro de que quieres estos apellidos?'
        },
        {
          title: 'Contraseña',
          text: 'Estar seguro de que quieres esta contraseña?'
        },
        {
          title: 'Correo',
          text: 'Estar seguro de que quieres estos correo?'
        }
      ]).then((result) => {
        if (result) {
          var answers = JSON.stringify(result)

          Swal.fire({
            title: 'Estas seguro de tu cambios?',
            html: `Your answers: <pre><code>${answers}</code></pre>`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire('Saved!', '', 'success')

            } else if (result.isDenied) {

              Swal.fire('Changes are not saved', '', 'info')

            }
          })
        }
      })

    } else {
      // Formulario Alumno
      Swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4']
      }).queue([
        {
          title: 'Nombre',
          text: 'Estar seguro de que quieres este nombre?'
        },
        {
          title: 'Apellidos',
          text: 'Estar seguro de que quieres estos apellidos?'
        },
        {
          title: 'Contraseña',
          text: 'Estar seguro de que quieres esta contraseña?'
        },
        {
          title: 'Correo',
          text: 'Estar seguro de que quieres estos correo?'
        }
      ]).then((result) => {
        if (result) {
          var answers = JSON.stringify(result)

          Swal.fire({
            title: 'Estas seguro de tu cambios?',
            html: `Your answers: <pre><code>${answers}</code></pre>`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire('Saved!', '', 'success')

            } else if (result.isDenied) {

              Swal.fire('Changes are not saved', '', 'info')

            }
          })
        }
      })

    }

  }

}
