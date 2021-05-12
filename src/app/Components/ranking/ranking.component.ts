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

  ContadorRanking: Object = {
    Rankings: String
  }

  ranking: Object = {
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

  Cambiar_Codigo(){
    Swal.fire({
      title: 'Quieres volver a generar el Codigo?',
      text: "Ten cuidado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Genrar',
      cancelButtonText: 'Cancelar'

    }).then((result) => {
      if (result.isConfirmed) {

      }
    })
  }

  Cambiar_Opcion(op: String, codigo: String, ranking: String): void {
    this.ModoCambio = op;
    this.BD.setCodigo(codigo,ranking);
  }

  BorrarRanking(codigo: String) {
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

        this.refresh();
        }else{
          Swal.fire('Error', '');
          }

    })
  }



}
