import { Component, Input } from '@angular/core';

@Component({
  selector: 'fruit-item',
  templateUrl: './app.fruit-component.html',
  styleUrls: ['./app.component.css']
})
export class FruitComponent { 
  
  @Input() fruit: string;
  
  constructor() { }

 
}
