import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
@Component({
  selector: 'app-crear-ranking',
  templateUrl: './crear-ranking.component.html',
  styleUrls: ['./crear-ranking.component.css']
})
export class CrearRankingComponent implements OnInit {


  Ranking: FormGroup;
  constructor(private formBuilder: FormBuilder, private BD: ProfeToolsService) { }

  ngOnInit(): void {
  }

}
