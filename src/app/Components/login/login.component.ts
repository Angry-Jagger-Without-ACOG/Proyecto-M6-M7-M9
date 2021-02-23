import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../servicios/profe-tools.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    mote: string;
    contrasena: string;

  constructor(private BD: ProfeToolsService) { }

  login(){

    console.log(this.mote);
    console.log(this.contrasena);

  }

  ngOnInit(): void {

  }

  Data_Bsse(){

   this.BD.Insertar_Login(this.mote,this.contrasena).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            //this.Insertar_Login();
          }
        }
      );

  }


}
