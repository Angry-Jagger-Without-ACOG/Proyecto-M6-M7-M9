import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user = new User();

  nombre: string;

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.nombre = this.user.nick;
  }

  logout(){
    environment.vsession = "";
    sessionStorage.clear();
    this.router.navigate(['LOG']);
  }

}
