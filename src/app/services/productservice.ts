import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Environtment } from '../../environtments/environtment';
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
  private baseUrl = `${Environtment.apiUrl}/Product/Get`;
  private getProductById = `${Environtment.apiUrl}/Product/GetById`;
  constructor(private http: HttpClient){};

  getAll(): Observable<any>{
    return this.http.get(this.baseUrl);
  }

  getById(productId : string): Observable<Product>{
    return this.http.get<Product>(this.getProductById + `/${productId}`);
  }
}
