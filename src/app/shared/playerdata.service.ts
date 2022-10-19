import { Player } from './../models/player';
import { Injectable } from '@angular/core';
import { idToken } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { resolve } from 'dns';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class PlayerdataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }


getAllPlayers(){
  return this.afs.collection('player').valueChanges({ idField: 'id' }) as unknown as Observable<Player[]>;
}



}
