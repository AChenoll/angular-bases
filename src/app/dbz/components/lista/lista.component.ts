import { Personaje } from './../../interfaces/personajes.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class DbzLista {

  @Output()
  public onDeletePersonajeById: EventEmitter<string>=new EventEmitter();

  @Input()
  public listaPersonajes:Personaje[]=[{
    id:uuid(),
    nombre:'Trunks',
    fuerza: 9000
  }]

  public deletePersonajeById(id:string=''):void{
    this.onDeletePersonajeById.emit(id);
  }
}
