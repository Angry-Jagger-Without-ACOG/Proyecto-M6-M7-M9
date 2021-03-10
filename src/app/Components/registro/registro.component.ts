import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';
import { Profesor } from 'src/app/Models/Profesor.model';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Alumno: FormGroup;
  Profesor: FormGroup;
  user = new Profesor();

  //Variable que indica que registro se va a utilizar: Alumno(true) o Profesor(false)
  switch_user = false;

  /////////////////////////////////////////////////////////////////////////////////////
  // Hace falta que al cambiar de tipo de registro se limpien los campos y los fallos//
  /////////////////////////////////////////////////////////////////////////////////////

  constructor(private formBuilder: FormBuilder,private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.Alumno = this.formBuilder.group({
      nick_a: ['', Validators.required],
      correo_a: ['', [Validators.required, Validators.email]],
      cont_a: ['', Validators.required],
      nombre_a: ['', Validators.required],
      apell_a: ['', Validators.required],
      curso: ['', Validators.required],
      img: ['', Validators.required]
    });

    this.Profesor = this.formBuilder.group({
      nick_p: ['', Validators.required],
      correo_p: ['', [Validators.required, Validators.email]],
      cont_p: ['', Validators.required],
      nombre_p: ['', Validators.required],
      apell_p: ['', Validators.required],
      centro: ['', Validators.required],
      img: ['', Validators.required]
    });

  }

  //Funcion del modulo ngx-ui-switch que utilizamos para elegir el tipo de usuario a elegir
  manualUpdateEvent(value: boolean) {
    this.switch_user = value;
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

        // var profesor: Profesor = new Profesor(this.Profesor.value.nick_p,
        //   this.Profesor.value.cont_p, this.Profesor.value.correo_p,
        //   this.Profesor.value.nombre_p, this.Profesor.value.apell_p,
        //   this.Profesor.value.centro);

        this.BD.RegistrarProfesor(this.user).subscribe(

          (respuesta: any) => {
            console.log(respuesta);
            Swal.fire('¡Creado!', '', 'success')
          },
          (error: any) => {
            console.log(error);
            Swal.fire('¡Error!', '', 'error')
          }

        );


      }else if(result.isConfirmed && this.switch_user == false){


      }

    })

  }

  RegistroProfesor() {
    this.BD.RegistroProfesor(this.user).subscribe (
      datos => {
        if(datos['response'] == 'OK') {
          console.log(datos['response'])
          alert(datos['mensaje']);
         } else {
          alert(datos['mensaje']);

        }
      }
    );
    }

}
