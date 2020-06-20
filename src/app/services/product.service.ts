import { Injectable } from '@angular/core';
import { Product } from  '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


//const apiUrl ="./assets/db.json";
const url ="http://localhost:3000/products";
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //products: Product[] =[

   // new Product(1, 'Product-1', 234 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(2, 'Product-2', 100 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(3, 'Product-3', 300 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(4, 'Product-4', 234 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(5, 'Product-5', 900 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(6, 'Product-6', 800 , 5 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU'),
    //new Product(7, 'Product-7', 7000 , 89 , 'This is a very good product . Try it and see yourself','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSIMCi0h3phSUMntggEOOskGzmFmJc1Gc5f3kEngrGAoJCY8o24&usqp=CAU')

  //]
 private _http : HttpClient;
  constructor(private http: HttpClient) {
    this._http=http;
   }

  getProducts() : Observable<Product[]> {
    return this._http.get<Product[]>(url);
  }
}
