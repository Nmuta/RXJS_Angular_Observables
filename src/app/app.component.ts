import { Component, Input, OnInit } from '@angular/core';
import {FruitService} from './fruit-service.service'; 
import {Observable} from 'rxjs'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Fruit Service';
  fruits: any[]; 
  newItem:string = ""; 

 
  constructor(private _fruitservice:FruitService){
    
  }


  addToItems (){
     this.fruits.push({name: this.newItem, price: 0.2}); 
  }

  localGetFruits(){
    this._fruitservice.getFruitsObservable().subscribe(payload => this.fruits = payload) ; 
  }

    localGetFruitsPromise(){
    this._fruitservice.getFruitsPromise().then(payload => this.fruits= payload); 
  }

  ngOnInit():void {
       this.localGetFruitsPromise(); 
    
  }
 
}
