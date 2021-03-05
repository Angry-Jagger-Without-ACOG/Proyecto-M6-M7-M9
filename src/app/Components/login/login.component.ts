import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  service: ProfeToolsService;
  user = new User();

  constructor(private BD: ProfeToolsService) { }



  ngOnInit(): void { }


  onFormSubmit(){

  }
  login() {
    console.log(this.user);
    this.BD.login(this.user)
    .pipe(first())
    .subscribe(
      (data) => {
        console.log(data)
        console.log(data['nombre'])
        console.log(data['password'])

      }
    )
  }

}
