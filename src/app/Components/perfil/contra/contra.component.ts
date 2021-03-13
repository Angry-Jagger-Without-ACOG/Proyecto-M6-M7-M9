import { Component, OnInit ,Output, EventEmitter  } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { Profesor } from 'src/app/Models/Profesor.model';
import { Alumno } from 'src/app/Models/Alumno.model';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent implements OnInit {

  @Output() volver = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  UpdateCont(){

    this.volver.emit(false);
  }

}
