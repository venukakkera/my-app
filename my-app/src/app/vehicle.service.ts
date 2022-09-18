import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  getFilteredVehicles(filterTerm: string) {
    throw new Error('Method not implemented.');
  }

  constructor(private _httpClient:HttpClient) { }

   getVehicles ():Observable<Vehicle[]>{

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1');

   }
   getVehicle (id:string):Observable<Vehicle[]>{

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id)

   }
   getFilteredvehicles(filterterm:string):Observable<Vehicle[]>{

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?filter='+filterterm);
   }
   getPagedvehicles(pageNo: number):Observable<Vehicle[]>{

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?limit=10&page='+pageNo);
   }
   getSortvehicles(column:string , order:string):Observable<Vehicle[]>{

    return this._httpClient.get<Vehicle[]>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'?sortBy='+column+'&order='+order);
   }
   createVehicle(vehicle:Vehicle):Observable<Vehicle>{
    return this._httpClient.post<Vehicle>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',vehicle);
   }
   updateVehicle(id:string ,vehicle:Vehicle):Observable<Vehicle>{
    return this._httpClient.put<Vehicle>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id, vehicle);
   }
   deleteVehicles (id:string):Observable<Vehicle>{

    return this._httpClient.delete<Vehicle>('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction'+'/'+id);
   }

   }






