import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  loginWithGoogle(){
    this.authservice.googleLogin()
  }

  loginWithEmail(formData){
    this.authservice.emailLogin(formData.value.email, formData.value.password);
  }


}
