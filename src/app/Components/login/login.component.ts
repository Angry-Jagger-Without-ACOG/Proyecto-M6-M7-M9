import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private BD: ProfeToolsService,public router: Router) { }
  Usuario: FormGroup;

  user = new User();

  submitted = false;

  ngOnInit(): void {
    sessionStorage.clear();
    this.Usuario = this.formBuilder.group({
      nick: ['', Validators.required] ,
      cont: ['', Validators.required]
    });

  }

get U() {
    return this.Usuario.controls;
}

loginUsuario() {
  this.BD.loginUsuario(this.user).subscribe (
    datos => {
      if(datos['response'] == 'OK') {
        environment.vsession = this.user.nick;
        alert(datos['mensaje']);
        sessionStorage.setItem("Name", environment.vsession)
        this.router.navigate(['Perfil']);
       } else {
        alert(datos['mensaje']);

      }
    }
  );
  }
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

