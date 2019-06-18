import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {freeApiService} from 'src/services/freeapi.service';
import {Product} from './classes/product'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Konrad Paniec FrontEnd';
  // readonly ROOT_URL = 'http://localhost:3005' // server root entry point 
  // //readonly ROOT_URL = 'https://jsonplaceholder.typicode.com' // server root entry point 

  // posts: any;
  // constructor (private http: HttpClient){}
  
  // getFirstPage() {
  //   this.posts = this.http.get(this.ROOT_URL+'/products?_page=1') // returns observable of products from the api
  // }
  constructor (private _freeApiService : freeApiService) {} // inject the freeApiService class

  productList: Product[]; // list of products

  ngOnInit(){
    this._freeApiService.getProducts()
    .subscribe
    (
      data=>
      {
        this.productList = data; // typecasting data returned from API to list
      }
    );
  }



  
}
