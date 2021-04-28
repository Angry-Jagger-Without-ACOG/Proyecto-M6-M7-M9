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
  nombre_Rank: String;


  codigoRanking: String;

  ranking: any = {

    codigoRanking: String,
    nombre_Usuario: String,
    nombre_ranking: String

  }


  constructor(private formBuilder: FormBuilder, private BD: ProfeToolsService) { }

  ngOnInit(): void {

    this.NewRank = this.formBuilder.group({
      nombre_rank: ['', Validators.required]
    });

    this.tipo_Usuario = localStorage.getItem('Tipo');
    this.nombre_Usuario = localStorage.getItem('Name');

  }

  UpdateCont() {
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
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
        this.codigoRanking = this.generaNss();

        this.ranking.nombre_Usuario = this.nombre_Usuario;
        this.ranking.codigoRanking = this.codigoRanking;
        this.ranking.nombre_ranking = this.R.nombre_rank.value


        ///////////////////////////////////////////////////////////////////////////////////////////
        // Comprobar que no exista el nombre del ranking y comprobar que realmente se ha creado  //
        //                       el ranking antes de la alerta confimando                        //
        ///////////////////////////////////////////////////////////////////////////////////////////

        this.BD.crearRanking(this.ranking).subscribe(
          datos => {
            if (datos['response'] == 'OK') {

              Swal.fire({

                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500

              })
              this.crearTablaTareas();

            } else {
              Swal.fire('Creado sin problemas', 'error' )

            }
          }
        );
      }

    })

  }

  crearTablaTareas()
  {
    this.BD.crearTablaTarea(this.ranking).subscribe(
      this.refresh
    )
  }



  generaNss() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 20 ; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}





}
