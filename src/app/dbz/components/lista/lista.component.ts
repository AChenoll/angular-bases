import { Personaje } from './../../interfaces/personajes.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class DbzLista {

  @Input()
  public listaPersonajes:Personaje[]=[{
    nombre:'Trunks',
    fuerza: 9000
  }]
}
