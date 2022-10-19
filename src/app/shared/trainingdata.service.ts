import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from '@firebase/util';
import { GamesTraninig } from '../models/gmaesTrainig';
@Injectable({
  providedIn: 'root'
})
export class TrainingdataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  getAllTrainings(){
    return this.afs.collection('training').valueChanges({ idField: 'id' }) as unknown as Observable<GamesTraninig[]>;
  }
}
