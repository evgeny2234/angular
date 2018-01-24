import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';
import { NgforComponent } from './ngfor/ngfor.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    NgifelseComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
