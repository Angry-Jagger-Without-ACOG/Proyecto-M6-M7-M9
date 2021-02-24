import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 constructor(private formBuilder: FormBuilder) { }
 Alumno: FormGroup;
 Profesor: FormGroup;
 submitted1 = false;
 submitted2 = false;
 switch1 = false;

  ngOnInit(): void {

    this.Alumno = this.formBuilder.group({
      nick_a: ['', Validators.required] ,
      correo_a: ['',[ Validators.required, Validators.email]],
      cont_a: ['', Validators.required],
      nombre_a: ['', Validators.required],
      apell_a: ['', Validators.required],
      curso: ['', Validators.required],
      img:['', Validators.required]
    });

    this.Profesor = this.formBuilder.group({
      nick_p: ['', Validators.required] ,
      correo_p: ['',[ Validators.required, Validators.email]],
      cont_p: ['', Validators.required],
      nombre_p: ['', Validators.required],
      apell_p: ['', Validators.required],
      centro: ['', Validators.required],
      img:['', Validators.required]
    });

  }
  //Funcion del modulo ngx-ui-switch que utilizamos para elegir el tipo de usuario a elegir
  manualUpdateEvent(value: boolean) {
    this.switch1 = value;
  }

  get A() {
    return this.Alumno.controls;
  }

  get P() {
    return this.Profesor.controls;
  }

  comp_Alum() {
    this.submitted1 = true;

    if(this.Alumno.invalid){
      return;
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Creado!',
          '',
          'success'
        )
      }
    })
  }

  comp_Prof() {
    this.submitted2 = true;

    if(this.Profesor.invalid){
      return;
    }

    Swal.fire({
      title: 'Estas seguro?',
      text: "¡ Estos son los datos con los que crearas el perfil !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4a4a50',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, crear!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Creado!',
          '',
          'success'
        )
      }
    })
  }

}
