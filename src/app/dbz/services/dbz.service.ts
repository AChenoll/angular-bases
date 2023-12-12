import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Personaje } from '../interfaces/personajes.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() { }

  public personajes:Personaje[]=[{
    id:uuid(),
    nombre:'El Nano',
    fuerza: 33
  },{
    id:uuid(),
    nombre:'Krilin',
    fuerza:500
  },{
    id:uuid(),
    nombre:'Goku',
    fuerza:10000
  },{
    id:uuid(),
    nombre: 'Migue el Maquina',
    fuerza: 9999999999999
  },{
    id:uuid(),
    nombre: 'Un palo',
    fuerza: 1
  }];

  public onNewPersonaje(personaje: Personaje):void{
    this.personajes.push(personaje);
  }

  // public onDeletePersonaje(indice:number):void{
  //   const eliminado:Personaje[]=this.personajes.splice(indice,1);

  //   console.log('Eliminado: ' + eliminado[0].nombre);
  // }

  public deletePersonajeById(id:string){
    const personajeEliminado: Personaje[] = this.personajes.filter(personaje => personaje.id === id);
    console.log('Personaje Eliminado: ' + personajeEliminado[0].nombre + ' , fuerza: ' + personajeEliminado[0].fuerza)

    this.personajes=this.personajes.filter(personaje=>personaje.id !== id);
  }

}
