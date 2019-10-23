import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { MatDialog } from '@angular/material';
import { DialogOpenComponent } from '../dialog-open/dialog-open.component';
import { FileUpload } from 'src/app/interfaces/fileUpload';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any [];
  myProduct: any = {};

  constructor(private productService: ProductService, public dialog: MatDialog) { }

  ngOnInit() {
    this.productService.getProductsCollection().subscribe(
      products => {
        this.products = products;
        console.log(this.products);
      }
    )
  }

  openDialog(product) {
    console.log(product);
    const dialogRef = this.dialog.open(DialogOpenComponent, {
      width: '400px',
      data: {
        name: product.productName,
        price: product.price,
        id: product.id
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.productService.updateProduct(product.id, res);
    });
  }

  deleteProduct(product) {
    this.productService.deleteProduct(product.id);
  }
}
