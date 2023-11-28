import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeroesModule } from './heroes/heroes.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './contador/contador.component';
import { PlayamarComponent } from './instituto/playamar/playamar.component';
import { MainPageComponent } from './dbz/pages/main-page.component';

@NgModule({
  declarations: [
    AppComponent, CounterComponent, PlayamarComponent, MainPageComponent
  ],
  imports: [
    BrowserModule, HeroesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
