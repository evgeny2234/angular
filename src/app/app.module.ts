import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { NgifelseComponent } from './ngifelse/ngifelse.component';


@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CarsComponent,
    CarComponent,
    NgifelseComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
