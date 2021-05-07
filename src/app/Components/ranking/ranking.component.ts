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

  //Variables para indicar el tipo de usuario
  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;

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
      //this.CountRanking(this.nombre_Usuario);
    } else if (this.tipo_Usuario == "Alumno") {
      this.Tipo = false;
    }

  }

  CountRanking(nombre_Usuario){
    this.BD.getTotalRankings(nombre_Usuario).subscribe(
       result => this.ContadorRanking = result[0]

      )
      console.log(this.ContadorRanking)
  }

  GetRanking(nombre_Usuario){

    this.BD.selectRankings(nombre_Usuario).subscribe(

      result => this.ranking = result[0]

    )
    this.Rankings.push(this.ranking);
    this.Rankings.push(this.ranking);
    this.Rankings.push(this.ranking);

  }


  Cambiar_Opcion(op: String): void {
    this.ModoCambio = op;
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

      //////////////////////////////////////////////////////////
      // Funcion encargada de borrar los rankings selecionados//
      //////////////////////////////////////////////////////////

        Swal.fire(
          'Borrado sin problemas'
        )
      }
    })
  }


}
