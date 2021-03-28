import { Component} from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};
  constructor(private activatedRoute:ActivatedRoute,
              private heroeService:HeroesService
    
    ){
    this.activatedRoute.params.subscribe(params =>{
      this.heroe = this.heroeService.getHeroe(params['id']);

    });

   } 


   getHeroesHouseImg(house:string){
     if(house == "DC"){
      return "assets/img/DC.png";
     }
     else if(house == "Marvel"){
      return "assets/img/marvel.png";
     }
   }

}
