import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  public cartCount:number = 0;

  constructor(private _cartService:CartService) {

    this._cartService.getValue().subscribe(
    (data:any)=>{
      this.cartCount=data;
    }
  )
  }

  ngOnInit(): void {
  }

}
