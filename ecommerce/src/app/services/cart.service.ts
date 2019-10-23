import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUpload } from '../interfaces/fileUpload';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  constructor(private httpclient : HttpClient) { }


}
