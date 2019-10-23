import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.scss']
})
export class AddAdminComponent implements OnInit {

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }

  addAdmin(formData) {
    console.log(formData.value.email);
    this.authservice.addAdmin(formData.value.email);
  }
}
