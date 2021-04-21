import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-ranking',
  templateUrl: './modificar-ranking.component.html',
  styleUrls: ['./modificar-ranking.component.css']
})
export class ModificarRankingComponent implements OnInit {

  constructor(private BD: ProfeToolsService) { }

  ngOnInit(): void {
  }

}
