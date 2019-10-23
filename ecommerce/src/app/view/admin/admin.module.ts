import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductUploadComponent } from './product-upload/product-upload.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { DialogOpenComponent } from './dialog-open/dialog-open.component';

@NgModule({
  declarations: [ProductUploadComponent, DashboardComponent, AddAdminComponent, DialogOpenComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [ProductUploadComponent, DashboardComponent, AddAdminComponent],
  entryComponents: [DialogOpenComponent],
})
export class AdminModule { }
