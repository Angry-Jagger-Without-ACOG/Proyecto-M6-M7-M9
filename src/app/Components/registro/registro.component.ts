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
 switch1 : boolean = true;

  ngOnInit(): void {

    this.Alumno = this.formBuilder.group({
      nick_a: ['', Validators.required] ,
      correo_a: ['',[ Validators.required, Validators.email]],
      cont_a: ['', Validators.required],
      nombre_a: ['', Validators.required],
      apell_a: ['', Validators.required],
      curso: ['', Validators.required]
    });

    this.Profesor = this.formBuilder.group({
      nick_p: ['', Validators.required] ,
      correo_p: ['',[ Validators.required, Validators.email]],
      cont_p: ['', Validators.required],
      nombre_p: ['', Validators.required],
      apell_p: ['', Validators.required],
      centro: ['', Validators.required]
    });

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

    Swal.fire('Los datos son correctos, vàldívíà pto vago!');

    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.stack.imgur.com/e8nZC.gif")
        left top
        no-repeat
      `
    })
  }

  comp_Prof() {
    this.submitted2 = true;

    if(this.Profesor.invalid){
      return;
    }

    Swal.fire('Los datos son correctos, vàldívíà pto vago!');

    Swal.fire({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: '3em',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://i.stack.imgur.com/e8nZC.gif")
        left top
        no-repeat
      `
    })
  }

}
