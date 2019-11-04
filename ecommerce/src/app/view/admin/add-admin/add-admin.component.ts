import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {
  addAdminForm: FormGroup;

  constructor(private authservice: AuthService) {
    this.addAdminForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
    })
   }

  ngOnInit() {
  }

  addAdmin() {
    console.log(this.addAdminForm.value.email);
    this.authservice.addAdmin(this.addAdminForm.value.email);
  }
}
