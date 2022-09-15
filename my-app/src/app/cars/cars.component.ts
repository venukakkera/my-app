import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  public car:string='';
  public message:string='';

  constructor( private _carService:CarService ) 
  {
     
    this.message = this._carService.message;
   }

  ngOnInit(): void {
  }

}
