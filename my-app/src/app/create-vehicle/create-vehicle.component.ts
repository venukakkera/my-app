import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent implements OnInit {

    public vehicleForm :FormGroup= new FormGroup({
      
      Vehicle :new FormControl(), 
      manufacturer :new FormControl(), 
      model :new FormControl(), 
      type :new FormControl(), 
      fuel :new FormControl(), 
      color :new FormControl()
    })

  constructor( private _vehicleService:VehicleService) { }

  ngOnInit(): void {
  }
  submit(){

    console.log(this.vehicleForm.value);
    this._vehicleService.createVehicle(this.vehicleForm.value).subscribe(
      (data:any)=>{
        alert('Created successfully..!!!')
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  }


