import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { Router, RouterOutlet } from '@angular/router';
import { User } from 'src/app/Models/user';
import { environment } from 'src/environments/environment';
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  get U() {
    return this.Usuario.controls;
=======
  ngOnInit(): void {
    sessionStorage.clear();
>>>>>>> Stashed changes
  }

  login() {
    this.submitted = true;

    if(this.Usuario.invalid){
      return;
    }


<<<<<<< Updated upstream
    this.BD.listarusuarios().subscribe(
      (respuesta: any) => {
        console.log(respuesta);
=======
  loginUsuario() {


    this.BD.loginUsuario(this.user).subscribe (
      datos => {
        if(datos['response'] == 'OK') {
          environment.vsession  = this.user.nick;
          sessionStorage.setItem("Nombre:",environment.vsession);

          console.log(environment.vsession);
          alert(datos['mensaje']);
          this.router.navigate(['Perfil']);
         } else {
          alert(datos['mensaje']);
>>>>>>> Stashed changes

      },
      (error: any) => {
        console.log(error);
      }
<<<<<<< Updated upstream
=======
    );
  }

>>>>>>> Stashed changes

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
