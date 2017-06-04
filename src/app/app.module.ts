import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { FruitComponent } from './app.fruit-component';
import { FruitService } from './fruit-service.service'; 

@NgModule({
  declarations: [
    AppComponent, 
    FruitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FruitService, HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
