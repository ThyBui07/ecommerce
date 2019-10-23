import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { FileUpload } from 'src/app/interfaces/fileUpload';
import { getQueryValue } from '@angular/core/src/view/query';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  onselectedAva: FileUpload;
  profileForm: FormGroup;
  imgSrc: string = '../../../../assets/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png';

  user$: User;

  constructor(private fileUploadService: FileUploadService, private userAuthService: AuthService, ) {
    this.profileForm = new FormGroup({
      userName: new FormControl(''),
      // password: new FormControl('', [Validators.required]),
      imgUrl: new FormControl(''),
    })


    this.userAuthService.user$.subscribe(user => this.user$ = user );
   }

  ngOnInit() {
  }

  async onselectedImg(event) {
    //show img
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imgSrc = event.target.result;
      this.user$.photoURL = event.target.result;
    }
    reader.readAsDataURL(event.target.files[0]);
    //upload to firebase
    this.onselectedAva = event.target.files[0];
    this.fileUploadService.onselectedImg(this.onselectedAva);
  }

  updateProfile() {
    this.user$.photoURL = this.profileForm.value.imgUrl;
    this.user$.displayName = this.profileForm.value.userName;
    this.userAuthService.updateUserData(this.user$);
  }
}
