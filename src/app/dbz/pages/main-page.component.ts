import { Personaje } from './../interfaces/personajes.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public personajes:Personaje[]=[{
    nombre:'El Nano',
    fuerza: 33
  },{
    nombre:'Krilin',
    fuerza:500
  },{
    nombre:'Goku',
    fuerza:10000
  },{
    nombre: 'Migue el Maquina',
    fuerza: 9999999999999
  },{
    nombre: 'Un palo',
    fuerza: 1
  }];

  public onNewPersonaje(personaje: Personaje):void{
    console.log('MainPage');
    console.log(personaje);

  }
}
