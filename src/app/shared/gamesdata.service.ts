import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from '@firebase/util';
import { GamesTraninig } from '../models/gmaesTrainig';


@Injectable({
  providedIn: 'root'
})
export class GamesdataService {

  constructor(private afs :AngularFirestore , private fireStorge : AngularFireStorage) { }
  getAllgames(){
     return this.afs.collection('gmaes').snapshotChanges();
  }
}
