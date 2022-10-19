import { Component, OnInit } from '@angular/core';
import { PlayerdataService } from '../shared/playerdata.service';
import { Player } from '../models/player';

@Component({
  selector: 'app-players-info',
  templateUrl: './players-info.component.html',
  styleUrls: ['./players-info.component.css']
})
export class PlayersInfoComponent implements OnInit {
playersList:Player [] =[];
  constructor(private data:PlayerdataService) { }

  ngOnInit(): void {
    this.getAllPlayers();
  }
getAllPlayers(){
  this.data.getAllPlayers().subscribe(res => {

    this.playersList = res.map((e: any) => {
      const data = e.payload.doc.data();
      data.id = e.payload.doc.id;
      return data;
    })

  },err => {
    alert('Error while fetching student data');
 
  })


}

}
