import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangilar',
  templateUrl: './rectangilar.component.html',
  styleUrls: ['./rectangilar.component.css']
})
export class RectangilarComponent implements OnInit {

public length: number = 0;
public breadth :number= 0;
public result : number =0;

  constructor() { }

  ngOnInit(): void {
  }
   area(){
     this.result= this.length * this.breadth;

   }
   perimeter () {
    this.result = 2*(this.length + this.breadth);
   }
}
