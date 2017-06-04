import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
 const URLLY = './fruits.json'; 
 import 'rxjs'; 


@Injectable()
export class FruitService {

  constructor(private _http: Http) { }
   
  getFruits() {
      // return this._http.get(URLLY).
      // map(function (response: Response){
      //    return response.json().toPromise(); 
      // }); 
      return [{
              "name": "Apple",
              "price": 0.14
            },
            {
              "name": "Orange",
              "price": 0.22
            },
            {
              "name": "Peach",
              "price": 1.20
            },
            {
              "name": "Kiwi",
              "price": 0.40
            },
            {
              "name": "Strawberry",
              "price": 0.90
            }
          ]
  }



 

}
