import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-open',
  templateUrl: './dialog-open.component.html',
  styleUrls: ['./dialog-open.component.scss']
})
export class DialogOpenComponent implements OnInit {
  id: string;
  productForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<DialogOpenComponent>
    , @Inject(MAT_DIALOG_DATA) public data: any) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit() {
  }

  updateProduct() {
    console.log(this.productForm.value);
    this.dialogRef.close(this.productForm.value);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
