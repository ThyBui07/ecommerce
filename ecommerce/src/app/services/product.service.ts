import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productCollection: AngularFirestoreCollection = this.afs.collection('products');
  constructor(private afs: AngularFirestore) { }

  getProducts(): Observable<any[]> {
    return this.productCollection.snapshotChanges();
}
}
