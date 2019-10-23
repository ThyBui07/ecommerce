import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//admin guard
import { AdminGuardGuard } from './guard/admin-guard.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'product'},
  {path: 'product', loadChildren: './view/product/product.module#ProductModule'},
  {path: 'user', loadChildren: './view/user/user.module#UserModule'},
  {path: 'admin', loadChildren: './view/admin/admin.module#AdminModule',  canActivate: [AdminGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
