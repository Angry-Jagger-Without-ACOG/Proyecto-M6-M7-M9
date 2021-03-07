import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ProfeToolsService } from '../../servicios/profe-tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  service: ProfeToolsService;

  user = new User();


  constructor(private BD: ProfeToolsService, public router: Router) { }

  ngOnInit(): void { }


  onFormSubmit(){

  }

  loginUsuario() {
    this.BD.loginUsuario(this.user).subscribe (
      datos => {
        if(datos['response'] == 'OK') {
          alert(datos['mensaje']);
          this.router.navigate(['Perfil']);
         } else {
          alert(datos['mensaje']);

        }
      }
    );
    }








}
