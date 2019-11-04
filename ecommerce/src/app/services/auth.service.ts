import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, of, from, observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../interfaces/user';
import { AngularFireFunctions } from '@angular/fire/functions';
import { map} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<User>;
  isAdmin: false;

  constructor(private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private functions: AngularFireFunctions,
    private snackBar: MatSnackBar) {
      //// Get auth data, then get firestore user document || null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
          if (user) {
            user.getIdTokenResult().then((idTokenResult) =>{
              // console.log(idTokenResult.claims.admin);
              this.isAdmin = idTokenResult.claims.admin;
            })
            const addIsAdminFlag = map((user: User) => {
              user.isAdmin = this.isAdmin;
              console.log(6, user.isAdmin);
              return user;
            })
            return this.afs.doc<User>(`users/${user.uid}`).valueChanges().pipe(addIsAdminFlag);
          } else {
            return of(null)
          }
        })
      )
    }


  addAdmin(email: string) {
    this.functions.httpsCallable('addAdminRole')({email: email}).toPromise()
      .then(res => {
        console.log(1,res);
        this.snackBar.open(`Admin added!`, `OK`, {
          duration: 5000
        });
      })
      .catch((err)  => console.error('error', err));
  }

    //login user with google
  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  //social login with popup
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.snackBar.open(`Signin successfully!`, `OK`, {
          duration: 5000
        });
        console.log('Signin successfully!');
        this.router.navigate(['/']);
        this.updateUserData(credential.user)
      })
      .catch(error => this.handleError(error));
  }

   // Sets user data to firestore on login/signup
    updateUserData(user) {
    const userRef = this.afs.collection('users').doc(user.uid);
      const data: User = {
        uid: user.uid,
        email: user.email,
        displayName: (user.displayName|| "Unknown").toString(),
        photoURL: (user.photoURL|| "http://www.gravatar.com/avatar/?d=mm&s=100").toString()
      }
      return userRef.set(data, { merge: true });
  }

  //signup a new user(by email/password ) to our firebase
  emailSignUp(email: string, password: string) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open(`Signup successfully!`, `OK`, {
          duration: 5000
        });
        console.log('Signup successfully!');
        this.router.navigate(['/']);
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

  // login an existing user with email/password
  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        this.snackBar.open(`Signin successfully!`, `OK`, {
          duration: 5000
        });
        console.log('Signin successfully!');
        this.router.navigate(['/']);
        return this.updateUserData(credential.user);
      })
      .catch(error => this.handleError(error));
  }

   //logout a user
   signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.snackBar.open(`Signout successfully!`, `OK`, {
        duration: 5000
      });
      console.log('Signout successfully!');
      this.router.navigate(['/product']);
    });
  }

  // If error, console log and notify user
  private handleError(error: Error) {
    console.error(error);
      alert(error.message);
  }

}
