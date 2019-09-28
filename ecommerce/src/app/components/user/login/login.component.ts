import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { UserAuthService } from '../../../services/user-auth.service';
import { User } from 'src/app/interfaces/user';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;
  user: User;
  userId: string;
  constructor(private snackBar: MatSnackBar, private router: Router, private auth: UserAuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => this.user = user);
  }

  success(content: any) {
    //   this.snackBar.open(`Welcome ${content.displayName}`, `OK`, {
    //     duration: 5000
    //   });
    //   this.router.navigate(['']);
    // }
    this.userId = firebase.auth().currentUser.uid;
    this.auth.updateUserData(this.user, this.userId);
    console.log(this.user);
}
}
