import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
<<<<<<< Updated upstream
import { Profesor } from 'src/app/Models/Profesor.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';

=======
import { environment } from 'src/environments/environment';
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    this.GetProfesor(this.usuario);
  }

  GetProfesor(nick) {
    this.BD.GetProfesor(nick).subscribe(
      result => this.usuario = result[0]
    );

  }

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
          text: 'Estar seguro de que quieres este correo?'
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

=======
    // Componenete de prueba
    this.Alumnos.push(new Alumno('Marc','','','','','',''));
    this.Alumnos.push(new Alumno('Fonsi','','','','','',''));
    this.Alumnos.push(new Alumno('Rosa','','','','','',''));
    this.Alumnos.push(new Alumno('David','','','','','',''));
    this.Alumnos.push(new Alumno('Joel','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    this.Alumnos.push(new Alumno('Susana','','','','','',''));
    console.log(environment.vsession);
>>>>>>> Stashed changes
  }

}
