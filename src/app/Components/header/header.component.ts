import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from 'src/app/Models/user';
import { ProfeToolsService } from 'src/app/servicios/profe-tools.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = new User();

  nombre: string;
  session: String;
  firstName: String;

  constructor(public router: Router, private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.nombre = this.user.nick;
    // console.log (this.BD.getSession());
    this.firstName = localStorage.getItem('Name');
  }

  logout() {

    Swal.fire({
      title: 'Seguro que quieres salir?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, salir!'
    }).then((result) => {
      if (result.isConfirmed) {
        environment.vsession = "";
        sessionStorage.clear();
        this.BD.borrarDatos;
        this.router.navigate(['LOG']);
      }
    })

  }

}
