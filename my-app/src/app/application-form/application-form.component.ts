import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {


  public firstname: string='';
  public lastname: string='';
  public gender: string='';
  public age: number=0;
  public mobile: number=0;
  public email: string='';
  public batch: number= 0;
  public address: string='';
  public education: string='';

  public students:Student[]=[];

  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.students['push'](
      {
      'firstname':this.firstname,
      'lastname' :this.lastname,
      'gender'   :this.gender,
      'age'      :this.age,  
      'mobile'   :this.mobile,
      'email'    :this.email,
      'batch'    :this.batch,
      'address'  :this.address,
      'education':this.education
    }  
 );
 }
 delete(i:number){
  this.students.splice(i,1);
 }

  }



