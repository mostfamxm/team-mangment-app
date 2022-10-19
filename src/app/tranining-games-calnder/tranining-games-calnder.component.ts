import { Component, OnInit } from '@angular/core';
import { TrainingdataService } from '../shared/trainingdata.service';
import { GamesdataService } from '../shared/gamesdata.service';
import { GamesTraninig } from '../models/gmaesTrainig';
@Component({
  selector: 'app-tranining-games-calnder',
  templateUrl: './tranining-games-calnder.component.html',
  styleUrls: ['./tranining-games-calnder.component.css']
})
export class TraniningGamesCalnderComponent implements OnInit {
games : GamesTraninig[]=[];
trainings:GamesTraninig[]=[];
  constructor(private gameData : GamesdataService, private TrainigData: TrainingdataService) { }

  ngOnInit(): void {
    this.getAllgames();
    this.getAlltrainings();
  }
  getAllgames(){
    this.gameData.getAllgames().subscribe(res => {
  
      this.games = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
  
    },err => {
      alert('Error while fetching student data');
   
    })
  }
    getAlltrainings(){
      this.TrainigData.getAllTrainings().subscribe(res => {
    
        this.trainings = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        })
    
      },err => {
        alert('Error while fetching student data');
     
      })

    }
  }

