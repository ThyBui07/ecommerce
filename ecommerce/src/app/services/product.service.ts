import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileUpload } from '../interfaces/fileUpload';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsCollection: AngularFirestoreCollection;

  constructor(private afs: AngularFirestore) { }

  getProductsCollection(): Observable<any[]> {
    this.productsCollection = this.afs.collection('products');
    return this.productsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data();
        data.id = a.payload.doc.id;
        return { ...data };
      }))
    );
  }

  updateProduct(productId, file) {
    return this.getProductById(productId).set(file, { merge: true });
  }

  deleteProduct(productId) {
    return this.getProductById(productId).delete();
  }

  getProductById(productId: string) {
    return this.afs.doc(`products/${productId}`)
  }
}
