import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'signup',
    pathMatch:'full',
    component: SignupComponent
  },
  {
    path:'wishlist/:id',
    pathMatch:'full',
    component: WishlistComponent
  },
  {
    path:'profile',
    pathMatch:'full',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
