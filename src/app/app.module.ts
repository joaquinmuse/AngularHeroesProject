import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureRoutingModule } from './app.routes'
//Rutas

//Servicios
import { HeroesService } from './services/heroes.service';
//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent
    ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
