import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
  searchForm: FormGroup;
  @Output() resultToEmit = new EventEmitter<string>();

  constructor(private productService: ProductService) {
    this.searchForm = new FormGroup({
      productName: new FormControl(''),
    })
   }

  ngOnInit() {

  }

  sendResToParent() {
    console.log(this.searchForm.value.productName);
    this.resultToEmit.emit(this.searchForm.value.productName);

    //reset form
    // this.searchForm.reset();
    // this.searchForm.setValue({
    //   productName: ''
    // });
  }
}
