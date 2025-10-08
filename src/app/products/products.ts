import { Component, OnInit } from '@angular/core';
import { Productservice, Product } from '../services/productservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true,
  imports: [CommonModule]
})
export class Products implements OnInit {
  title = 'Daftar Produk';
  products: any[] = [];
  product!: Product;
  constructor(private productService:Productservice){}

  ngOnInit(): void {
    this.loadProduct();
  }

  detailProduct(productId: string): void{
    this.getProductById(productId);
  }

  loadProduct(): void{
    this.productService.getAll().subscribe({
      next : (data) => this.products = data,
      error : (err) => console.error("gagal load data", err)
    });
  }

  getProductById(productId: string): void{
    this.productService.getById(productId).subscribe({
      next : (data) => this.product = data,
      error : (err) => console.error("gagal load data product by id", err)
    });
  }
}
