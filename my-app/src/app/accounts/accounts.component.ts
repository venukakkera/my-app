import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {


  public filterTerm:string="";
  public column:string="";
  public order: string="";

  public Accounts :Accounts[]=[];

  
  constructor( private _accountsService: AccountsService) {

   this._accountsService.getAccounts().subscribe(
     (data:any)=>{
      this.Accounts = data;
     },
     (err:any)=>{
      alert('Internal server errror');
     }
   )
   }

  ngOnInit(): void {
  }
  filter(){
    this._accountsService.getFilteredAccounts(this.filterTerm).subscribe(
     (data:any)=>{
       this.Accounts = data;
     },
     (err:any)=>{
       alert('Internal server error');
     }
    )
   }
   sort(){
    this._accountsService.getSortAccounts(this.column, this.order).subscribe(
    (data:any)=>{
      this.Accounts = data;
    },
    (err:any)=>{
      alert('Internal server error');
    }
    )
  }
  
   page(pageNo: number){
    this._accountsService.getPagedAccounts(pageNo).subscribe(
   
      (data:any)=>{
        this.Accounts = data;
      },
      (err:any)=>{
        alert('internal server erroe');
      }
    )
   }
}
