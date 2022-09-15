import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor( private _httpClient:HttpClient) { }

  getActivity():Observable<ActivityService[]>{

    return this._httpClient.get<ActivityService[]>('https://www.boredapi.com/api/activity');

  }
}
