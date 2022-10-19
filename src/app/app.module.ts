import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire/compat';
import { FirestoreModule } from "@angular/fire/firestore";
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './homePg/dashboard.component';
import { FormsModule } from '@angular/forms';
// import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgModel } from '@angular/forms';
import { TeamInfoComponent } from './team-info/team-info.component';
import { PlayersInfoComponent } from './players-info/players-info.component';
import { TraniningGamesCalnderComponent } from './tranining-games-calnder/tranining-games-calnder.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TeamInfoComponent,
    PlayersInfoComponent,
    TraniningGamesCalnderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,FirestoreModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
