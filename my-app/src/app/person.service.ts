import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  constructor( private _httpClient:HttpClient) { }

  getPerson():Observable<PersonService[]>{

   return this._httpClient.get<PersonService[]>('https://jsonplaceholder.typicode.com/users');
  }
}
