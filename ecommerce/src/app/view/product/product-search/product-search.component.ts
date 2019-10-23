import { Component, OnInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable, observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';
import { FileUpload } from 'src/app/interfaces/fileUpload';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {

  }


}
