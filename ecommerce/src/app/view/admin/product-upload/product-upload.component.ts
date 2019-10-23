import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-upload',
  templateUrl: './product-upload.component.html',
  styleUrls: ['./product-upload.component.scss']
})


export class ProductUploadComponent implements OnInit {
  // reset selected file with input tag file type
  @ViewChild('imgUpload') myInputVariable: ElementRef;

  onSelectedImg: File;
  uploadForm: FormGroup;
  imgSrc: any;
  uploadProgress: any;
  public message: string;
  private basePath: string;

  constructor(private fileUploadService: FileUploadService, private angularFireStorage: AngularFireStorage, private snackBar: MatSnackBar) {
    this.uploadForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      category: new FormControl(''),
      price: new FormControl('', [Validators.required]),
      productURL: new FormControl(''),
    })
   }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.onSelectedImg = event.target.files[0];

    //upload to firesotage
      //create time upload
        var uploadTime = new Date();
        //create a reference to storage bucket location
        this.basePath = `uploadImages/${uploadTime.getUTCDate()}_${(uploadTime.getMonth() +1)}_${uploadTime.getUTCFullYear()}`;
        var filePath  =`${this.basePath}/${this.onSelectedImg.name}`;
        const uploadTask = this.angularFireStorage.upload(filePath, this.onSelectedImg);
      //progress
        this.uploadProgress = uploadTask.percentageChanges();
        console.log(this.uploadProgress);
        console.log('Image uploaded!');
      //download url
        uploadTask.snapshotChanges().pipe(
        finalize(() => {
          this.angularFireStorage.ref(filePath).getDownloadURL().subscribe((url) => {
              this.imgSrc = url;
            })
        })
        )
        .subscribe();
  }

  cancelFileSelected(){
    //có thể đưa vào service
    const deleteRef = this.angularFireStorage.ref(this.basePath);
    console.log(deleteRef);
    deleteRef.child(this.onSelectedImg.name).delete();
    console.log('Image deleted');
    this.resetForm();
  }

  onSubmit(){
    this.uploadForm.value.productURL= this.imgSrc;
    console.log(this.uploadForm.value);
    this.fileUploadService.submitProduct(this.uploadForm.value);
    this.snackBar.open(`Success Product Saved!`, `OK`, {
      duration: 5000
    });
    this.resetForm();
  }

  resetForm() {
    //reset form
    this.uploadForm.reset();
    //reset value
    this.uploadForm.setValue({
      productName: '',
      category: '',
      price: '',
      productURL: '',
    });
    this.imgSrc = '';
    //reset the progress bar
    this.uploadProgress = '';
    //rest the input type file
    this.myInputVariable.nativeElement.value = "";
  }
}
