import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;

  constructor(private authservice: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.authservice.googleLogin()
  }

  loginWithEmail(){
    this.authservice.emailLogin(this.loginForm.value.email, this.loginForm.value.password);
  }


}
