import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'; 
// const URLLY = './fruits.json'; 
// const URLLY = 'https://jsonplaceholder.typicode.com/posts'; 
const URLLY = './assets/fruits.json'; 

import 'rxjs'; 


@Injectable()
export class FruitService {

  constructor(private _http: Http) { }
   
  getFruitsObservable() {
      return this._http.get(URLLY).
      map( (response: Response)=>  response.json() ); 

  }

  getFruitsPromise(){
    return this._http.get(URLLY).
      map( (response: Response) =>  response.json() ).toPromise(); 
  }


}
