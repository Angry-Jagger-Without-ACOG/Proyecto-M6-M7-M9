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
  Alumnos:any;

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {}

  login() {
    this.BD.listarusuarios().subscribe(
      (respuesta: any) => {
        console.log(respuesta);

      },
      (error: any) => {
        console.log(error);
      }

    );
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


}
