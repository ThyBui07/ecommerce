import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProductsComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxAuthFirebaseUIModule,
    FormsModule
  ],
  exports: [ProductsComponent]
})
export class ViewModule { }
