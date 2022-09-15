import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  public studentForm: FormGroup= new FormGroup({

    name: new FormControl(),
    rollno:new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    address:new FormGroup({
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    hostels:new FormArray([]),
  })
  get hostelsFormArray(){
    return this.studentForm.get('hostels')as FormArray;
  }
  constructor() { }

  ngOnInit(): void {
  }
  add(){
    this.hostelsFormArray.push(
      new FormGroup({

      })
    )
  }
  submit(){
   console.log (this.studentForm.value);
  }
  remove(i:number){
      this.hostelsFormArray.removeAt(i);
    }
  }


