import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import {MatDialogModule} from '@angular/material/dialog';
//
// import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FirebaseModule } from './firebase.module';
import { RouterModule } from '@angular/router';
// import { LoginComponent } from '../components/user/login/login.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule,
    //
    FirebaseModule,
    MatDialogModule,
    //

  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
