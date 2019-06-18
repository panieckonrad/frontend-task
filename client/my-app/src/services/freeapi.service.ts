
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {Product} from '../app/classes/product'

@Injectable()
export class freeApiService // service in which we are injecting our components
{
    constructor(private httpclient: HttpClient){}
    readonly ROOT_URL = 'http://localhost:3005' // root of our server
    productList: Product[];
    maxlimit = '9007199254740992'; // maximum number

    getProducts():Observable<Product[]> {
        return this.httpclient.get<Product[]>(this.ROOT_URL+'/products?_limit='+this.maxlimit) // return whole database of products GET
    }

    searchProduct(value:string){
        return this.httpclient.get<Product[]>(this.ROOT_URL+'/products?_limit='+this.maxlimit+'&q='+value) // return query of products GET
    }


}
