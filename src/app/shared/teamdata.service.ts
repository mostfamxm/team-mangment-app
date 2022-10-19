import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from '@firebase/util';
import { team } from '../models/team';
@Injectable({
  providedIn: 'root'
})
export class TeamdataService {

  constructor( private afs :AngularFirestore , private fireStorge : AngularFireStorage) { }
getAllInfo(){
  return this.afs.collection('team').valueChanges({ idField: 'id' }) as unknown as Observable<team[]>;

}
}