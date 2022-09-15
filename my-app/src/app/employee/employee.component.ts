import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']

})
export class EmployeeComponent implements OnInit {
  public name:string='';
  public age:number=0;
  public company:string='';
  public package:number= 0;

  public employees:Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
  this.employees.push(
    {
      'name':this.name,
      'age':this.age,
      'company':this.company,
      'package':this.package
   
        }
         );
  }
  delete(i:number){
    this.employees.splice(i,1);
  }
  deleteall(){
    this.employees=[];
  }
  packageLowToHigh(){
    this.employees=this.employees.sort((a,b)=>a.package -b.package);
  }
  packageHighToLow(){
    this.employees= this.employees.sort((a,b)=> b.package- a.package);
}
}