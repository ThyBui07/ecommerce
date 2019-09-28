import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent, LoginComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    NgxAuthFirebaseUIModule,
    FormsModule
  ]
})
export class UserModule { }
