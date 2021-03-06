import { Component, OnInit } from '@angular/core';
import { Ranking } from '../../Models/Ranking.model';
import { ProfeToolsService } from '../../servicios/profe-tools.service';
import Swal from 'sweetalert2';
import { result } from 'lodash';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})

export class RankingComponent implements OnInit {

  ModoCambio: String = "RC";

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  creado: boolean;
  codigo: String;

  ContadorRanking: Object = {
    Rankings: String
  }

  ranking: Object = {
    nombre: String,
    codigo: String
  }

  actualizarCodigo: any = {
    codigoViejo: String,
    codigoNuevo: String
  }

  datosRanking: Object = {
    nombre: String,
    codigo: String
  }


  Rankings: Ranking[] = [];

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if (this.tipo_Usuario == "Profesor") {
      this.Tipo = true;
      this.GetRanking(this.nombre_Usuario);
    } else if (this.tipo_Usuario == "Alumno") {
      this.Tipo = false;
      this.selectRankingsAlumno();
    }

  }

  GetRanking(nombre_Usuario){

    this.BD.selectRankings(nombre_Usuario).subscribe(

      result => this.ranking = result

    );

      this.Rankings.push(this.ranking);

  }

  refresh(): void {
    window.location.reload();
  }


  Cambiar_Opcion(op: String, codigo: String, nombre: String): void {
    this.ModoCambio = op;
    console.log(codigo,nombre);

    this.BD.setCodigo(codigo,nombre);
  }

  selectRankingsAlumno(){

    this.BD.selectRankingsAlumno(this.nombre_Usuario).subscribe(
      result => this.datosRanking = result
    );

  }

  BorrarRanking(codigo: String, NombreTabla : String) {
    Swal.fire({
      title: 'Estas seguro de borrar este ranking?',
      text: "No podras recuperar este Ranking!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {

      if (result.isConfirmed) {

        this.BD.DeleteRanking(codigo).subscribe(

        )

        this.BD.DropTableRanking(NombreTabla).subscribe()

        this.refresh();
        }else{
          Swal.fire('Error', '');
          }

    })
  }

  CambiarCodigo(codigo: String){

    this.codigo = this.generaNss();

    this.actualizarCodigo.codigoViejo = codigo;
    this.actualizarCodigo.codigoNuevo = this.codigo;


    this.BD.GenerarCodigo(this.actualizarCodigo).subscribe(
        datos =>{
          if(datos['response'] == 'OK'){
            this.refresh()
          }else{
            Swal.fire('Tiene algun error','','error')

          }
        }
      )
  }

  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 20 ; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}


}
