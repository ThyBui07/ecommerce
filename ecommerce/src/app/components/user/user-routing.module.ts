import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'login',
    pathMatch:'full',
    component: LoginComponent
  },
  {
    path:'profile',
    pathMatch:'full',
    component: UserProfileComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
