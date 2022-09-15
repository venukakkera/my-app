import { NgClass, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Mail } from '../mail';
import { MailService } from '../mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public Mails: Mail[]=[]

  constructor(private _mailService:MailService ) {

    this._mailService.getMails().subscribe(

     (data:any)=>{
        this.Mails= data;
     },
      (err:any)=>{
        alert('Internal server erroe');
      }
  )
    }

  ngOnInit(): void {
  }


  }

