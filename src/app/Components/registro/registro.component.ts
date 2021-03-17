import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import { Profesor } from 'src/app/Models/Profesor.model';
import { Alumno } from 'src/app/Models/Alumno.model';
import { Comprobacion } from './Comprobador';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Alumno: FormGroup;
  Profesor: FormGroup;
  user = new Profesor();
  alumno = new Alumno();

  //Variable que indica que registro se va a utilizar: Alumno(true) o Profesor(false)
  switch_user = false;

  constructor(private formBuilder: FormBuilder, private BD: ProfeToolsService, public router: Router) { }

  ngOnInit(): void {

    this.Alumno = this.formBuilder.group({
      nick_a: ['', Validators.required],
      correo_a: ['', [Validators.required, Validators.email]],
      cont_a: ['', Validators.required],
      rep_cont_a: ['', Validators.required],
      nombre_a: ['', Validators.required],
      apell_a: ['', Validators.required],
      curso: ['', Validators.required],
      img: ['', Validators.required]
    }, {
      validator: Comprobacion('cont_a', 'rep_cont_a')
    });

    this.Profesor = this.formBuilder.group({
      nick_p: ['', Validators.required],
      correo_p: ['', [Validators.required, Validators.email]],
      cont_p: ['', Validators.required],
      rep_cont_p: ['', Validators.required],
      nombre_p: ['', Validators.required],
      apell_p: ['', Validators.required],
      centro: ['', Validators.required],
      img: ['', Validators.required]
    }, {
      validator: Comprobacion('cont_p', 'rep_cont_p')
    });

  }

  //Funcion del modulo ngx-ui-switch que utilizamos para elegir el tipo de usuario a elegir
  manualUpdateEvent(value: boolean) {
    this.switch_user = value;
    this.Alumno.reset();
    this.Profesor.reset();
  }

  gotoLogin() {
    this.router.navigate(['LOG']);
  }

  get A() {
    return this.Alumno.controls;
  }

  get P() {
    return this.Profesor.controls;
  }

  Comprobador() {

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'

    }).then((result) => {

      if (result.isConfirmed && this.switch_user == true) {


        this.BD.RegistroAlumno(this.alumno).subscribe(

          (respuesta: any) => {

            Swal.fire('¡Creado!', '', 'success')
          },
          (error: any) => {

            Swal.fire('¡Error!', '', 'error')
          });


      } else if (result.isConfirmed && this.switch_user == false) {
        this.BD.RegistrarProfesor(this.user).subscribe();


      }

    })

  }

  RegistroProfesor() {

  }

}
