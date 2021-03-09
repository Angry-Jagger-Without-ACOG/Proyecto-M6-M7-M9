import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { ProfeToolsService } from 'src/app/servicios/profe-tools.service';

@Component({
  selector: 'app-login-prof',
  templateUrl: './login-prof.component.html',
  styleUrls: ['./login-prof.component.css']
})
export class LoginProfComponent implements OnInit {

  user = new User();

  constructor(private BD: ProfeToolsService, public router: Router) { }

  ngOnInit(): void {
  }


  loginProfesor() {
    this.BD.loginProfe(this.user).subscribe (
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

