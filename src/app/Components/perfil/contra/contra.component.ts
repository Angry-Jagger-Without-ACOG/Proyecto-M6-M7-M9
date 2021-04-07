import { Component, OnInit } from '@angular/core';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comprobacion } from './Comprobador';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.component.html',
  styleUrls: ['./contra.component.css']
})

export class ContraComponent implements OnInit {

  nombre_Usuario: String;
  tipo_Usuario: String;
  usuario: FormGroup;

  Datos_Usuario: any = {
    nombre: null,
    password: null
  }

  constructor(private BD: ProfeToolsService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    this.usuario = this.formBuilder.group({
      cont: ['', Validators.required],
      new_cont: ['', Validators.required],
      rep_cont: ['', Validators.required]
    },
    {validator: Comprobacion('new_cont', 'rep_cont')});
  }

  get data() {
    return this.usuario.controls;
  }

  cambiarDatos() {

    if (this.tipo_Usuario == "Profesor") {
      this.cambiarPasswordProfe();
    }

    else if (this.tipo_Usuario == "Alumno") {
      this.cambiosPasswordAlumno();
    }

  }

  cambiarPasswordProfe() {
    this.Datos_Usuario.nombre = this.nombre_Usuario;
    this.Datos_Usuario.password = this.usuario.controls.rep_cont.value;
    this.BD.cambiarContraseñaProfesor(this.Datos_Usuario).subscribe()
    this.UpdateCont();
  }

  cambiosPasswordAlumno() {
    this.Datos_Usuario.nombre = this.nombre_Usuario;
    this.Datos_Usuario.password = this.usuario.controls.rep_cont.value;
    this.BD.cambiarContraseñaAlumno(this.Datos_Usuario).subscribe()
    this.UpdateCont();
  }


  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }


}
