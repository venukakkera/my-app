import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm: FormGroup= new FormGroup({

    name: new FormControl( '',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    rollno:new FormControl('',[Validators.required,Validators.min(1),Validators.max(100)]),
    age: new FormControl('',[Validators.required,Validators.min(0),Validators.max(120)]),
    phone: new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(999999999)]),
    address:new FormGroup({
      state:new FormControl(),
      pincode:new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    hostels:new FormArray([]),
    dayscholars:new FormArray([]),
    paymentType:new FormControl()
  })
    get hostelsFormArray(){
      return this.studentForm.get('hostels')as FormArray;
  }
    get dayscholarsFormArray(){
      return this.studentForm.get('dayscholars')as FormArray;
  }
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.hostelsFormArray.push(
      new FormGroup({
        cardNo:new FormControl(),
        expiry:new FormControl(),
        cvv:new FormControl('',[Validators.required,Validators.min(100),Validators.max(999)]),
        hostelfee:new FormControl(),
      })
    )
  }
  add2(){
    this.dayscholarsFormArray.push(
      new FormGroup({
        busfee:new FormControl(),
      })
    )
  }
  remove(i:number){
    this.hostelsFormArray.removeAt(i);
    this.dayscholarsFormArray.removeAt(i);
  }
  submit(){
    this.studentForm.markAllAsTouched();
    console.log(this.studentForm.value);
 }
    }
  


