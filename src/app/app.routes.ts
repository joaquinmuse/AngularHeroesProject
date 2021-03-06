import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent  } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BusquedaDeHeroesComponent } from './components/busqueda-de-heroes/busqueda-de-heroes.component';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

const routes: Routes = [
     { path: 'home', component: HomeComponent },
     { path: 'about', component: AboutComponent },
     { path: 'heroes', component: HeroesComponent },
     { path: 'heroe/:id', component: HeroeComponent },
     { path: 'busqueda/:termino', component: BusquedaDeHeroesComponent },
     { path: '**', pathMatch: 'full',redirectTo:'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
