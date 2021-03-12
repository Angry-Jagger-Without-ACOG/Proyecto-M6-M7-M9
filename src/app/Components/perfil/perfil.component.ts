import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Profesor } from 'src/app/Models/Profesor.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
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
  tipo_Usuario: String;
  nombre_Usuario: String;

  nombre: string;
  apellido: string;
  password: string;
  email: string;

   usuario: Object = {

    nick: null,
    password: null,
    correo: null,
    nombre: null,
    apellido: null,
    curso: null,
    centro: null

  }


  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if(this.tipo_Usuario == "Profesor"){
      this.Tipo = true;
      this.GetProfesor(this.nombre_Usuario);
    }else if (this.tipo_Usuario == "Alumno") {
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
        progressSteps: [this.nombre,this.apellido,this.password,this.email]
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
          var update = JSON.stringify(result)

          Swal.fire({
            title: 'Estas seguro de tu cambios?',
            html: `Your answers: <pre><code>${update}</code></pre>`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
          }).then((result) => {
            if (result.isConfirmed) {

              Swal.fire('Saved!', '', 'success')
              this.UpdateAlumno(update);
              console.log();

            } else if (result.isDenied) {

              Swal.fire('Changes are not saved', '', 'info')

            }
          })
        }
      })

    }
  }

  UpdateAlumno(update){
    this.BD.CambiosPerfil(update).subscribe(

    )
  }

}
