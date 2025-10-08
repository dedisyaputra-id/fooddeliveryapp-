import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Product{
  productId: string;
  productName: string;
  productDescription: string;
  productPrice: string;
  productCount: string;
  categoryName: string;
}

@Injectable({
  providedIn: 'root'
})

export class Productservice {
  private baseUrl = "https://localhost:7218/api/Product/Get";
  private getProductById = "https://localhost:7218/api/Product/GetById";
  constructor(private http: HttpClient){};

  getAll(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getById(productId : string): Observable<Product>{
    return this.http.get<Product>(this.getProductById + `/${productId}`);
  }
}
