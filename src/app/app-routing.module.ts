import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';
import { CrearRankingComponent } from './Components/crear-ranking/crear-ranking.component';
import { RankingGrupoComponent } from './Components/ranking-grupo/ranking-grupo.component';
import { RankingSoloComponent } from './Components/ranking-solo/ranking-solo.component';
import { PerfilProfesorComponent } from './Components/perfil-profesor/perfil-profesor.component';
import { PerfilAlumnoComponent } from './Components/perfil-alumno/perfil-alumno.component';
import { ModificarRankingComponent } from './Components/modificar-ranking/modificar-ranking.component';

const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'LOG'},
{ path: 'LOG', component: LoginComponent},
{ path: 'REG', component: RegistroComponent},
{ path: 'CRC', component: CrearRankingComponent},
{ path: 'RGC', component: RankingGrupoComponent},
{ path: 'RSC', component: RankingSoloComponent},
{ path: 'PPC', component: PerfilProfesorComponent},
{ path: 'PAC', component: PerfilAlumnoComponent},
{ path: 'MRC', component: ModificarRankingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
