import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products: any = [];

  constructor(private productService: ProductService, public authservice: AuthService) { }

  ngOnInit() {
    this.productService.getProductsCollection().subscribe(
      products => {
        // console.log(products);
        this.products = products;
      }
    );
  }

}
