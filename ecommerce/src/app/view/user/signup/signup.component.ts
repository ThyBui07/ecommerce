import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  hide = true;

  constructor(private authservice: AuthService) {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit() {
  }

  onSignup(){
    this.authservice.emailSignUp(this.signupForm.value.email, this.signupForm.value.password);
  }
}
