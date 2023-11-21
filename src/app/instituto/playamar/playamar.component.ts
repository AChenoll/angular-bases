import { Component } from '@angular/core';

@Component({
  selector: 'app-playamar',
  templateUrl: './playamar.component.html',
  styleUrls: ['./playamar.component.css']
})
export class PlayamarComponent {
  public name:string='IES Playamar';
  public city:String='Torremolinos';
  public fp:String[]=['Informática y Comunicaciones', 'Transporte y Mantenimiento'];
  public img:any="../../../assets/logo-ies-playamar.png";

  public changeSchool():void{
    this.name='IES Jacaranda';
    this.city='Churriana';
    this.fp=['Hosteleria y Turismo']
  }

  public changeImg():void{
    this.img="../../../assets/ies-jacaranda-logo.jpg";
  }
}
