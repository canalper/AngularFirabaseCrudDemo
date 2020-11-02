import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  '@angular/fire/auth';
import { User } from  'firebase';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })

export class UserService {
  user: User;
    constructor(public  afAuth:  AngularFireAuth, public  router:  Router ) {
      this.afAuth.authState.subscribe(user => {
        if (user){
          this.user = user;
          localStorage.setItem('user', JSON.stringify(this.user));
        } else {
          localStorage.setItem('user', null);
        }
      })
    }

  login(email: string, password: string) {
      return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  async register(email: string, password: string) {
    var result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    this.sendEmailVerification();
}
async sendEmailVerification() {
  await (await this.afAuth.currentUser).sendEmailVerification()
  this.router.navigate(['admin/verify-email']);
}

async sendPasswordResetEmail(passwordResetEmail: string) {
  return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
}

logout() {
  this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['login']);
}

get isLoggedIn(): boolean {
  const  user  =  JSON.parse(localStorage.getItem('user'));
  return  user  !==  null;
}

}
