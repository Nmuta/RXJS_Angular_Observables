import { Component, Input, OnInit } from '@angular/core';
import {FruitService} from './fruit-service.service'; 
import {Observable} from 'rxjs'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  fruits: any[]; 
  newItem:string = ""; 

 
  constructor(private _fruitservice:FruitService){
    
  }


  addToItems (){
    this.fruits.push({name: this.newItem, price: 0.2}); 
  }

  ngOnInit():void {
    this.fruits = this._fruitservice.getFruits(); 
       
  }
 
}
