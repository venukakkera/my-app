import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public persons: Person[]=[];

  constructor(private _personService:PersonService) {

  this._personService.getPerson().subscribe(

  (data:any)=>{
    this.persons=data;
  },
  (err:any)=>{
    alert('Nerwork error');
  }
  )
  }
  

   
   


  ngOnInit(): void {
  }

}
