import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private BD: ProfeToolsService) { }
  Usuario: FormGroup;
  mote: string;
  contrasena: string;
  Alumnos:any;
  submitted = false;
  ngOnInit(): void {
    this.Usuario = this.formBuilder.group({
      nick: ['', Validators.required] ,
      cont: ['', Validators.required]
    });

  }

  get U() {
    return this.Usuario.controls;
  }

  login() {
    this.submitted = true;

    if(this.Usuario.invalid){
      return;
    }


    this.BD.listarusuarios().subscribe(
      (respuesta: any) => {
        console.log(respuesta);

      },
      (error: any) => {
        console.log(error);
      }

    );
  }


  // Data_Bsse(){

  //  this.BD.Insertar_Login(this.mote,this.contrasena).subscribe(
  //       datos => {
  //         if (datos['resultado'] == 'OK') {
  //           //this.Insertar_Login();
  //         }
  //       }
  //     );

  // }


}
