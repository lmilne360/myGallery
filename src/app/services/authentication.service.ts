import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../models/user.model';

@Injectable()
export class AuthenticationService {

  private user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
   }
  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
  }

  logout() {
    console.log("Logout method reached")
    return this.afAuth.auth.signOut();
  }

  authUser() {
    return this.user;
  }
}
