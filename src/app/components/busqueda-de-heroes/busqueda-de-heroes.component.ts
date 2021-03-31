import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute, Routes } from '@angular/router';

@Component({
  selector: 'app-busqueda-de-heroes',
  templateUrl: './busqueda-de-heroes.component.html'
})
export class BusquedaDeHeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  constructor(private _heroesService:HeroesService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(index:number){
    this.router.navigate(['/heroe',index]);
    }

}
