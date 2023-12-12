import { Personaje } from './../../interfaces/personajes.interface';
import { Component, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-personaje',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class DbzAdd {
  @Output()
  public onNewPersonaje: EventEmitter<Personaje>=new EventEmitter();

  public personaje:Personaje={
    id:uuid(),
    nombre:'',
    fuerza:0
  };

  public addPersonaje():void{
    // debugger;
    console.log(this.personaje);
    if(this.personaje.nombre.length===0) return;

    this.onNewPersonaje.emit(this.personaje);

    //Inicialiazamos los valores
    this.personaje={id:uuid(), nombre: '', fuerza:0};
  }
}
