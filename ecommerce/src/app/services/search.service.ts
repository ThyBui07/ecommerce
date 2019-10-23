import { Injectable } from '@angular/core';
import { Observable, from, zip, BehaviorSubject, observable } from 'rxjs';
import { switchMap, map, flatMap } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { FileUpload } from '../interfaces/fileUpload';
@Injectable({
  providedIn: 'root'
})
export class SearchService {


  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { }

  // getProductName() {
  //   return this.afs.collection('products', ref => {
  //     let query : firebase.firestore.Query = ref;
  //     query = query.where("productName", "==", true);
  //     return query;
  //   }).valueChanges();
  // }

}
