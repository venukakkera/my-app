import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Student } from '../student';
import { User } from '../user';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
public age: number= 22;
public name: string="Venu";
public isIndian :boolean= true;

//Array interpolation
public phones:number[] = [9555,3789,9292];
public courses: string[] = ["Angular",'React'];

//object interpolation
public user: User ={name:'John', city:'Texas'};
public student:Student = {
  name:'Ajay',
  id:'N123',
  marks:99
};
public employee: Employee ={
  name:'venu',
  company:'wipro',
  package:80000
};
//Array of objects interpolation
public users: User[]=
[
  {name:'John', city:'Texas'},
  {name:'Smith', city:'vegas'},
  {name:'Raj', city:'Delhi'},
  {name:'Shyam', city:'Hyderabad'}
];
  public students:Student[]=
  [
    {name:'Anil', id:'N123',marks:90},
    {name:'Ajay', id:'N124',marks:70},
    {name:'Arjun', id:'N125',marks:85}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
