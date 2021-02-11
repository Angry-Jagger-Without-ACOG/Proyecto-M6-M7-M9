import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CrearRankingComponent } from './Components/crear-ranking/crear-ranking.component';
import { RankingGrupoComponent } from './Components/ranking-grupo/ranking-grupo.component';
import { RankingSoloComponent } from './Components/ranking-solo/ranking-solo.component';
import { ModificarRankingComponent } from './Components/modificar-ranking/modificar-ranking.component';
import { PerfilComponent } from './Components/perfil/perfil.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'PC'},
{ path: 'LOG', component: LoginComponent},
{ path: 'REG', component: RegistroComponent},
{ path: 'CRC', component: CrearRankingComponent},
{ path: 'RGC', component: RankingGrupoComponent},
{ path: 'RSC', component: RankingSoloComponent},
{ path: 'MRC', component: ModificarRankingComponent},
{ path: 'PC', component: PerfilComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
