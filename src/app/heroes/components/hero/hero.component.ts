import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string='Goku';
  public age:number=27;
  public img:any="../../../assets/goku.jpg";

  public get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeName():void{
    this.name='Vegeta';
  }

  public changeAge():void{
    this.age=33;
  }

  public changeImg():void{
    this.img="../../../assets/vegeta.jpg";
  }

  public undo():void{
    this.name='Goku';
    this.age=27;
    this.img="../../../assets/goku.jpg";
  }
}
