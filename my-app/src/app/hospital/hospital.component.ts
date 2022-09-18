import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';


@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {
   
  public name:string='';
  public room:number=0;
  public disease:string='';
  public billamount:number=0

  public patients:Patient[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.patients['push'](
      {
        'name':this.name,
        'room':this.room,
    'disease' :this.disease,
  'billamount':this.billamount
      }
    );
  }
  delete(i:number){
    this.patients.splice(i,1);
  }
  deleteall(){
this.patients=[ ];

  }

}
