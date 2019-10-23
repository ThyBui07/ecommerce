import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  exports: [SignupComponent, LoginComponent, WishlistComponent, ProfileComponent],
  declarations: [SignupComponent, LoginComponent, WishlistComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
