import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Accounts } from './accounts';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private _httpClient:HttpClient) { }

  getAccounts():Observable<Accounts[]>{

    return this._httpClient.get<Accounts[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=1');
  }
  getFilteredAccounts(filterterm:string):Observable<Accounts[]>{

    return this._httpClient.get<Accounts[]>( 'https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?filter='+filterterm);
  }
  getPagedAccounts(pageNo: number):Observable<Accounts[]>{

    return this._httpClient.get<Accounts[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?limit=10&page='+pageNo);
}
getSortAccounts(column:string , order:string):Observable<Accounts[]>{

  return this._httpClient.get<Accounts[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/principals'+'?sortBy='+column+'&order='+order);
}
}