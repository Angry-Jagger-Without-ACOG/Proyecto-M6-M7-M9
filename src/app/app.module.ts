import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { HeaderComponent } from './Components/header/header.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { RankingComponent } from './Components/ranking/ranking.component';
import { CrearRankingComponent } from './Components/ranking/crear-ranking/crear-ranking.component';
import { RankingGrupoComponent } from './Components/ranking/ranking-grupo/ranking-grupo.component';
import { RankingSoloComponent } from './Components/ranking/ranking-solo/ranking-solo.component';
import { ModificarRankingComponent } from './Components/ranking/modificar-ranking/modificar-ranking.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    CrearRankingComponent,
    RankingGrupoComponent,
    RankingSoloComponent,
    ModificarRankingComponent,
    HeaderComponent,
    PerfilComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
