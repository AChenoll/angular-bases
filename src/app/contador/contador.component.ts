import { Component } from '@angular/core';

@Component({
  selector:'app-contador',
  templateUrl:'./contador.component.html'
})

export class CounterComponent{
  public contador:number=27;

  incrementBy( val : string ):void{
    this.contador+= Number(val);
  }

  resetCounter():void{
    this.contador=0;
  }


  decrementBy(val : string):void{
    this.contador-=Number(val);
  }
}
