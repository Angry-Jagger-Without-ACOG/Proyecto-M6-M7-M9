import { Component, OnInit} from '@angular/core';
import {Comprobacion} from './Comprobador';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})
export class ContraComponent implements OnInit {

  nombre_Usuario: String;
  tipo_Usuario: String;
  usuario: FormGroup;

  profesor: any = {
    nombre_Usuario: null,
    password: null,
    password2: null,
    password3: null
  }

  constructor(private BD: ProfeToolsService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');
    this.profesor.nombre_Usuario = this.nombre_Usuario;

    this.usuario = this.formBuilder.group({
      cont: ['', Validators.required],
      new_cont: ['', Validators.required],
      rep_cont: ['', Validators.required]
    },
    {
      validator: Comprobacion('new_cont', 'rep_cont')});

  }

  get data() {
    return this.usuario.controls;
  }

  cambiarDatos() {

    if (this.tipo_Usuario == "Profesor") {

      this.cambiarPasswordProfe();

    } else if (this.tipo_Usuario == "Alumno") {

      this.cambiosPasswordAlumno();

    }
  }

  cambiarPasswordProfe() {
    this.BD.cambiarContraseñaProfesor(this.profesor).subscribe(

    )
    this.UpdateCont();
  }

  cambiosPasswordAlumno() {
    this.BD.cambiarContraseñaAlumno(this.profesor).subscribe(

    )
    this.UpdateCont();
  }


  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


}
