import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/interfaces/fileUpload';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  onselectedAva: FileUpload;
  profileForm: FormGroup;
  currentUser: User;

  constructor(private fileUploadService: FileUploadService, private userAuthService: AuthService, private snackBar: MatSnackBar ) {
    this.profileForm = new FormGroup({
      userName: new FormControl('')
    })


    this.userAuthService.user$.subscribe(data => {
      console.log(data);
      this.currentUser = {...data};
    })
   }

  ngOnInit() {
  }

  onselectedImg(event) {
    //show img
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.currentUser.photoURL = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    //upload to firebase
    this.onselectedAva = event.target.files[0];
    this.fileUploadService.onselectedImg(this.onselectedAva);

  }

  updateProfile() {
    this.currentUser.photoURL = this.onselectedAva.url;
    this.currentUser.displayName = this.profileForm.value.userName;
    console.log(this.currentUser);
    this.userAuthService.updateUserData(this.currentUser);
    console.log('Update Successfully!');
    this.snackBar.open(`Update Succesfully!`, `OK`, {
      duration: 5000
    });
  }
}
