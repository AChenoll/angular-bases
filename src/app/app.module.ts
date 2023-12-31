import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './contador/contador.component';
import { PlayamarComponent } from './instituto/playamar/playamar.component';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent, CounterComponent, PlayamarComponent
  ],
  imports: [
    BrowserModule, HeroesModule, DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
