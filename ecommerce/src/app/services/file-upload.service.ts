import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { FileUpload } from '../interfaces/fileUpload';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  basePath: string;

  productsCollection: AngularFirestoreCollection = this.afs.collection('products');

  constructor(private afs: AngularFirestore, private angularFireStorage: AngularFireStorage) { }

  submitProduct(file) {
    return this.productsCollection.add(file);
  }

  onselectedImg(file: FileUpload) {
    //create time upload
    var uploadTime = new Date();
    //create a reference to storage bucket location
    this.basePath = `uploadImages/${uploadTime.getUTCDate()}_${(uploadTime.getMonth() +1)}_${uploadTime.getUTCFullYear()}`;
    var filePath  =`${this.basePath}/${file.name}`;
    const uploadTask = this.angularFireStorage.upload(filePath, file);
    console.log(uploadTask);

    //download url
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        this.angularFireStorage.ref(filePath).getDownloadURL().subscribe((url) => {
            file.url = url;
            console.log(file.url);
          })
      })
      )
      .subscribe();
  }
}
