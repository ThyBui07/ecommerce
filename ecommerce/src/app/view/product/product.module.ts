import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchComponent } from './product-search/product-search.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [ProductSearchComponent, ProductItemComponent, ProductViewComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule
  ],
  exports: [ProductSearchComponent, ProductItemComponent, ProductViewComponent]
})
export class ProductModule { }
