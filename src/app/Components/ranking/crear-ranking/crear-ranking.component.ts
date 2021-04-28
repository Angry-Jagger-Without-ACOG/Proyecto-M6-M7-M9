import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfeToolsService } from '../../../servicios/profe-tools.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-ranking',
  templateUrl: './crear-ranking.component.html',
  styleUrls: ['./crear-ranking.component.css']
})

export class CrearRankingComponent implements OnInit {

  NewRank: FormGroup;

  Tipo: boolean = true;
  tipo_Usuario: String;
  nombre_Usuario: String;
  usuario: Object = {}

  constructor(private formBuilder: FormBuilder, private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.NewRank = this.formBuilder.group({
      nombre_rank: ['', Validators.required]
    });

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

    if (this.tipo_Usuario == "Profesor") {
      this.Tipo = true;
      this.GetProfesor(this.nombre_Usuario);
    }

  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  GetProfesor(nombre_Usuario) {
    this.BD.GetProfesor(nombre_Usuario).subscribe(
      result => this.usuario = result[0]
    );
  }

  get R() {
    return this.NewRank.controls;
  }

  Crear() {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras cambiar los nombres!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Crear',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        ///////////////////////////////////////////////////////////////////////////////////////////
        // Comprobar que no exista el nombre del ranking y comprobar que realmente se ha creado  //
        //                       el ranking antes de la alerta confimando                        //
        ///////////////////////////////////////////////////////////////////////////////////////////

        Swal.fire('Creado sin problemas')

      }

    })

  }

}
