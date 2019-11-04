import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FileUpload, cartItem } from 'src/app/interfaces/fileUpload';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatTableDataSource, MatTable } from '@angular/material';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {

  cartListItems: cartItem[] = [];
  // dataSource = new MatTableDataSource<cartItem>(this.cartListItems);
  @ViewChild(MatTable) table: MatTable<any>;

  testForm: FormGroup;
  displayedColumns: string[] = ['name', 'price','quantity', 'actions'];

  constructor(public cartservice: CartService) {

    this.cartservice.cartItems$.subscribe(data => {
        this.cartListItems = data;
        this.cartListItems.map((object) => {
          object.quantity = 1;
          return object;
        })
        console.log(this.cartListItems);
        // console.log(this.dataSource);
      })

    this.testForm = new FormGroup({
      test: new FormControl('')
    })
   }

  ngOnInit() {

  }

  quantitySubmit() {
    let p = this.testForm.value.test;
    this.cartListItems.map((object) => {
      object.quantity = p;
      return object;
    });
    console.log(this.cartListItems);
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.cartListItems.map(t => t.price * t.quantity).reduce((acc, value) => acc + value, 0);
  }


  deleteItem(id) {
    this.cartservice.removeItem(id);
    console.log(this.cartListItems);
    this.table.renderRows();
  }

}
