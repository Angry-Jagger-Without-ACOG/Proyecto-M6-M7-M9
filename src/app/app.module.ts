import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistroComponent } from './Components/registro/registro.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RankingComponent } from './Components/ranking/ranking.component';
import { CrearRankingComponent } from './Components/ranking/crear-ranking/crear-ranking.component';
import { ModificarRankingComponent } from './Components/ranking/modificar-ranking/modificar-ranking.component';
import { HeaderComponent } from './Components/header/header.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { ContraComponent } from './Components/perfil/contra/contra.component';
import { ActualizarComponent } from './Components/perfil/actualizar/actualizar.component';
import { VerRankingComponent } from './Components/ranking/ver-ranking/ver-ranking.component';

import { UiSwitchModule } from 'ngx-ui-switch';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';




@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    RankingComponent,
    CrearRankingComponent,
    ModificarRankingComponent,
    HeaderComponent,
    PerfilComponent,
    ContraComponent,
    ActualizarComponent,
    VerRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    HttpClientModule,
    FontAwesomeModule,
    ShowHidePasswordModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
