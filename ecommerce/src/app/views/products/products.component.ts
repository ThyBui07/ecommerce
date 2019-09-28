import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product [];

  constructor(private productservice: ProductService,
    private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productservice.getProducts().subscribe( res => {
      // console.log(res);
      this.products = res.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Product;
      })
      console.log(this.products);
    })
  }
}
