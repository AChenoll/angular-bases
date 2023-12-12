import { DbzService } from './../services/dbz.service';
import { Personaje } from './../interfaces/personajes.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(public DbzService: DbzService) {}

}
