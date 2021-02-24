import { Component, OnInit } from '@angular/core';
import {Equipo} from '../../Models/Equipo.model'
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  Lista_Equipos : Equipo[]= [];

  constructor() { }

  ngOnInit(): void {
    this.Lista_Equipos.push(new Equipo('R_Prueba1','Clasico',true));
    this.Lista_Equipos.push(new Equipo('R_Prueba2','Clasico',false));
    this.Lista_Equipos.push(new Equipo('R_Prueba3','Clasico',true));
  }

}
