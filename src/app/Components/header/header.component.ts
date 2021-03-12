import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(public router: Router,private BD: ProfeToolsService) { }

  ngOnInit(): void {
    this.nombre = this.user.nick;
    // console.log (this.BD.getSession());
    this.firstName = localStorage.getItem('Name');
  }

  logout(){
    environment.vsession = "";
    sessionStorage.clear();
    this.BD.borrarDatos;
    console.log(this.BD.getDatos());
    this.router.navigate(['LOG']);
  }

}
