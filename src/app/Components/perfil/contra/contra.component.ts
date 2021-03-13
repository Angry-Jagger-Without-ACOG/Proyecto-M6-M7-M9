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



  profesor: any ={
    nick: null,
    password: null,
    password2: null,
    password3: null

  }


  constructor(private BD: ProfeToolsService) {
  } password2?: string;

  ngOnInit(): void {




  }

  UpdateCont(){



    this.volver.emit(false);
  }
  updatePasswordProfesor(){
    this.BD.updatePasswordProfesor(this.profesor).subscribe();



  }

}
