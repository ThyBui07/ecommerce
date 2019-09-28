import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, catchError, switchMap } from 'rxjs/operators';
import { User } from './../interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  //dat ten co $: observable
  user$: Observable <User>;
  constructor(private http: HttpClient,
              private router: Router,
              public afAuth: AngularFireAuth,
              private snackBar: MatSnackBar,
              private afs: AngularFirestore) {
                //// Get auth data, then get firestore user document || null
  this.user$ = this.afAuth.authState.pipe(
    switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return of(null)
      }
    })
  )
  }

  // login(provider: firebase.auth.AuthProvider) {
  //   this.afAuth.auth
  //     .signInWithRedirect(provider)
  //     .then((credential) => {
  //       this.updateUserData(credential.user)
  //     });
  // }

  logout() {
  this.afAuth.auth.signOut().then(() => {
    this.snackBar.open(`Sign Out Successful`, `OK`, {
      duration: 5000
    });
    this.router.navigate(['']);
    window.location.reload();
  })
  }

  updateUserData(user:any, userId: string) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      roles: {
        subscriber: true
      }
    }
    return userRef.set(data, { merge: true })
  }
  ///// Role-based Authorization //////
  canRead(user: User): boolean {
    const allowed = ['admin', 'editor', 'subscriber']
    return this.checkAuthorization(user, allowed)
  }

  canEdit(user: User): boolean {
    const allowed = ['admin', 'editor']
    return this.checkAuthorization(user, allowed)
  }

  canCreate(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  canDelete(user: User): boolean {
    const allowed = ['admin']
    return this.checkAuthorization(user, allowed)
  }

  // determines if user has matching role
  private checkAuthorization(user: User, allowedRoles: string[]): boolean {
    if (!user) return false
    for (const role of allowedRoles) {
      if ( user.roles[role] ) {
        return true
      }
    }
    return false
  }
}
