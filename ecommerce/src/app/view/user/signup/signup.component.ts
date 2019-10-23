import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  onSignup(formData){
    this.authservice.emailSignUp(formData.value.email, formData.value.password);
  }
}
