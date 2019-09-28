import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './views/products/products.component';

const routes: Routes = [
  {path: 'user', loadChildren: './components/user/user.module#UserModule'},
  {path: '', pathMatch:'full', redirectTo: 'menu'},
  {path: 'menu', pathMatch:'full', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
