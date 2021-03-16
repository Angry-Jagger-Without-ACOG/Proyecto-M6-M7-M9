import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/Models/user';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  Usuario: FormGroup;
  user = new User();
  //Variable que indica que registro se va a utilizar: Alumno(true) o Profesor(false)
  switch_user = false;
  session: String;

  constructor(private formBuilder: FormBuilder, private BD: ProfeToolsService, public router: Router) { }

  ngOnInit(): void {

    localStorage.clear();

    this.Usuario = this.formBuilder.group({
      nick: ['', Validators.required],
      cont: ['', Validators.required]
    });

  }

  get U() {
    return this.Usuario.controls;
  }

  //Funcion del modulo ngx-ui-switch que utilizamos para elegir el tipo de login
  manualUpdateEvent(value: boolean) {
    this.switch_user = value;
    this.Usuario.reset();
  }

  gotoRegistro() {
    this.router.navigate(['REG']);
  }

  Comporbar() {

    //Alumno
    if (this.switch_user == true) {
    this.BD.loginUsuario(this.user).subscribe(
      datos => {
        if (datos['response'] == 'OK') {
          environment.vsession = this.user.nick;
          localStorage.setItem("Name", environment.vsession);
          localStorage.setItem("Tipo", "Alumno");
          this.BD.setDatos(datos);
          this.router.navigate(['Perfil']);
        } else {
          Swal.fire('Error', '');
        }
      }
    );

    //Professor
    }else if(this.switch_user == false){

      this.BD.loginProfe(this.user).subscribe(
        datos => {
          if (datos['response'] == 'OK') {
            environment.vsession = this.user.nick;
            localStorage.setItem("Name", environment.vsession);
            localStorage.setItem("Tipo", "Profesor");
            this.BD.setDatos(datos);
            this.router.navigate(['Perfil']);
          } else {
            Swal.fire('Error', '');
          }
        }
      );

    }
  }

  }



