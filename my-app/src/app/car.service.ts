import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  public message:string  = "Electric car is going to introduce in 2025";

  constructor() { }
}
