import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductItemComponent } from './product-item/product-item.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    component: ProductViewComponent
  },
  {
    path:'product/:id',
    pathMatch: 'full',
    component: ProductItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
