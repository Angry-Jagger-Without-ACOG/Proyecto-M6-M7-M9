import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
import { RankingComponent } from './Components/ranking/ranking.component';
import { CrearRankingComponent } from './Components/ranking/crear-ranking/crear-ranking.component';
import { ModificarRankingComponent } from './Components/ranking/modificar-ranking/modificar-ranking.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'LOG'},
{ path: 'LOG', component: LoginComponent},
{ path: 'REG', component: RegistroComponent},
{ path: 'RC', component: RankingComponent},
{ path: 'CRC', component: CrearRankingComponent},
{ path: 'MRC', component: ModificarRankingComponent},
{ path: 'Perfil', component: PerfilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
