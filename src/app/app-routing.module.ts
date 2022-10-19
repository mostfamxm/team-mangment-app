import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './homePg/dashboard.component';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { TraniningGamesCalnderComponent } from './tranining-games-calnder/tranining-games-calnder.component';



const routes: Routes = [
{path :'', redirectTo:'login',pathMatch:'full'},
{path:'login' , component:LoginComponent},
{path:'home' , component:DashboardComponent},
{path:'team', component:TeamInfoComponent},
{path:'players', component:PlayersInfoComponent},
{path:'calender',component:TraniningGamesCalnderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
