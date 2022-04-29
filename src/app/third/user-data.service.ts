import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  url="http://www.mocky.io/v2/5ea172973100002d001eeada"
 // url="https://jsonplaceholder.typicode.com/posts"
  constructor(private http:HttpClient) { }
  user(){
    return this.http.get(this.url);
  }
}
