import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public nombresHeroes : String[] = ["Krilin","Piccolo", "Yamcha"]
  public nombresHeroesEliminados: String = '';

  public eliminaUltimoHeroe() : void{
    this.nombresHeroesEliminados = this.nombresHeroesEliminados+''+this.nombresHeroes.pop()+',';
  }
}
