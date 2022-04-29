import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IUser } from './User';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 // private _url: string="/assets/Data/register.json";
 url="http://www.mocky.io/v2/5ea172973100002d001eeada"
// url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  getRegister(){
    return this.http.get(this.url);
  }
}



















// export class RegisterService {
//   // private _url: string="/assets/Data/register.json";
//   url="https://jsonplaceholder.typicode.com/posts"
//    constructor(private http:HttpClient) { }
//    getRegister():Observable<IUser[]>{
//      return this.http.get<IUser[]>(this.url);
//    }
//  }