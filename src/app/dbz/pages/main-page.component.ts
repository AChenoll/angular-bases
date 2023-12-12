import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/personajes.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private DbzService: DbzService) {}

  get personajes(): Personaje[]{
    return this.DbzService.personajes;
  }

  onDeletePersonaje(id:string):void{
    this.DbzService.deletePersonajeById(id);
  }

  onNewPersonaje(personaje:Personaje):void{
    this.DbzService.addPersonaje(personaje);
  }

}
