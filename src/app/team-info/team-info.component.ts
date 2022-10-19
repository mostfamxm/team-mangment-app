import { Component, OnInit } from '@angular/core';
import { team } from '../models/team';
import { TeamdataService } from '../shared/teamdata.service';
@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
infoList:team[]=[];
  constructor(private data:TeamdataService) { }

  ngOnInit(): void {
    this.getAllInfo();
  }
  getAllInfo(){

    this.data.getAllInfo().subscribe(res => {
      this.infoList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err => {
      alert('Error while fetching student data');
    });

  }

}
