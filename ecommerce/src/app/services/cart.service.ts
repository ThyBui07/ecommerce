import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { FileUpload } from '../interfaces/fileUpload';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any = [];
  cartItems$= new BehaviorSubject<any>(this.cartItems);

  // cartItems$ = new Subject<any>();
  // private currentCart = [];

  constructor(private snackBar: MatSnackBar) { }

  // addItem(item) {
  //   this.currentCart.push(item);
  //   this.cartItems$.next(this.currentCart);
  // }

  addItem(product: any) {
    this.cartItems.push(product);
    this.cartItems$.next(this.cartItems);
    this.snackBar.open(`Product add to Cart!`, `OK`, {
      duration: 5000
    });
  }

  removeItem(id) {
    const index = this.cartItems.findIndex((item) => {
      return item.id = id;
    });
    console.log(index);
    if (index != -1 ) {
      this.cartItems.splice(index, 1);
      this.cartItems$.next(this.cartItems);
    }
  }

}
