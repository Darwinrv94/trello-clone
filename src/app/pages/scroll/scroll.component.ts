import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Product {
  id: string;
  title: string;
  price: number;
  images: string[];
}

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html'
})
export class ScrollComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.httpClient.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data => {
        this.products = data;
      });
  }



}