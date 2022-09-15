import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sruare',
  templateUrl: './sruare.component.html',
  styleUrls: ['./sruare.component.css']
})
export class SruareComponent implements OnInit {

  public length: number = 0;
  public result: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
area(){
  this.result = this.length * this.length;
}
perimeter(){
  this.result = this.length *4 ;
}
}
