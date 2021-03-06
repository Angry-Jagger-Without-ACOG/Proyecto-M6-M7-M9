import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ProfeToolsService } from '../../Service/profe-tools.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  service: ProfeToolsService;

  user = new User();

  constructor(private BD: ProfeToolsService, private router:Router) { }

  ngOnInit(): void {

  }

  loginUsuario() {
    this.BD.loginUsuario(this.user).subscribe (
      datos => {
        if(datos['response'] == 'OK') {
          alert(datos['mensaje']);
          //this.BD.setToken(datos.token);
          this.router.navigate(['Perfil']);
         } else {
          alert(datos['mensaje']);

        }
      }
    );
    }








}
