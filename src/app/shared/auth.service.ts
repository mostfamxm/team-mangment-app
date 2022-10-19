import { Injectable } from '@angular/core';
import {AngularFireAuth ,} from '@angular/fire/compat/auth'
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider} from '@angular/fire/auth'
import { RouterModule, Router } from '@angular/router';
import { stringLength } from '@firebase/util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth , private router : Router) {
    
   }
// login method : 
 login(email:string, password:string){
  this.fireAuth.signInWithEmailAndPassword(email,password).then(()=> {
localStorage.setItem('token','true');
    this.router.navigate(['/home'])
  }, err =>{

    alert('somthing went wrong');
    this.router.navigate(['/login']);
  } )
}

//logOutMethod: 
 logOut(){
  this.fireAuth.signOut().then(()=>{
localStorage.removeItem('token');
    this.router.navigate(['/login']);
  } , 
  err =>{
    alert(err.message);

  })
}

}

