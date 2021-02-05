import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClient } from '@angular/common/http';
import { CrearRankingComponent } from './crear-ranking/crear-ranking.component';
import { RankingGrupoComponent } from './Components/ranking-grupo/ranking-grupo.component';
import { RankingSoloComponent } from './Components/ranking-solo/ranking-solo.component';
import { PerfilProfesorComponent } from './Components/perfil-profesor/perfil-profesor.component';
import { PerfilAlumnoComponent } from './Components/perfil-alumno/perfil-alumno.component';
import { ModificarRankingComponent } from './Components/modificar-ranking/modificar-ranking.component';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    CrearRankingComponent,
    RankingGrupoComponent,
    RankingSoloComponent,
    PerfilProfesorComponent,
    PerfilAlumnoComponent,
    ModificarRankingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
