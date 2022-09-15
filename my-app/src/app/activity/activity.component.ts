import { Component, OnInit } from '@angular/core';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  public Activitys:Activity[]=[];

  constructor( private _activityService:ActivityService) {

    this._activityService.getActivity().subscribe(

      (data:any)=>{
        this.Activitys=data;
   },
      (err:any)=>{

      }
    )
  }

    


  ngOnInit(): void {
  }

}
