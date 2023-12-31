import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { DbzAdd } from './components/add/add.component';
import { DbzLista } from './components/lista/lista.component';



@NgModule({
  declarations: [
    MainPageComponent,
    DbzAdd,
    DbzLista
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class DbzModule { }
