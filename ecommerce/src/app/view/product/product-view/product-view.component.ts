import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  products: any = [];
  filterProducts: any = [];
  user$: User;
  result =  '';

  constructor(private productService: ProductService, public authservice: AuthService, public cartService: CartService) {
    this.authservice.user$.subscribe(user => this.user$ = user );
   }

  ngOnInit() {
    this.productService.getProductsCollection().subscribe(
      products => {
        // console.log(products);
        this.products = products;
        console.log(this.products);
      }
    );
  }

  searchRes(res: string) {
    this.result = res;
    console.log(this.result);

    this.filterProducts =this.products.filter((product) => {
      return product.productName.toLowerCase().includes(this.result);
    });
    console.log(this.filterProducts);
  }

  addToCart(product) {
    console.log(product);
    if(this.user$ !=null ) {
      return this.cartService.addItem(product);
    }
    else {
      alert('please log in');
    }
  }
}
