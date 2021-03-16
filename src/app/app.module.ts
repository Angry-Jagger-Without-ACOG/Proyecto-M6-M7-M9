import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CrearRankingComponent } from './Components/ranking/crear-ranking/crear-ranking.component';
import { RankingGrupoComponent } from './Components/ranking/ranking-grupo/ranking-grupo.component';
import { RankingSoloComponent } from './Components/ranking/ranking-solo/ranking-solo.component';
import { ModificarRankingComponent } from './Components/ranking/modificar-ranking/modificar-ranking.component';
import { HeaderComponent } from './Components/header/header.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { LoginProfComponent } from './Components/login-prof/login-prof.component';
import { ContraComponent } from './Components/perfil/contra/contra.component';
import { ActualizarComponent } from './Components/perfil/actualizar/actualizar.component';



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
    LoginProfComponent,
    ContraComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
