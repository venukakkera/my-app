import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor( private _httpClient:HttpClient) { }

  getMails():Observable<MailService[]>{

   return this._httpClient.get<MailService[]>('https://jsonplaceholder.typicode.com/todos');
  }
  }



