import { DataSource } from '@angular/cdk/collections'
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

export class DataSourceProduct extends DataSource<Product> {

  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.originalData = products;
    this.data.next(products);
  }

  getTotal() {
    const products = this.data.getValue();

    return products
      .map(p => p.price)
      .reduce((price, total) => price + total, 0);
  }

  update(id: Product['id'], changes: Partial<Product>): void {
    const products = this.data.getValue();
    const productIndex = products.findIndex((prod: Product) => prod.id === id);

    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes
      };

      this.data.next(products);
    }
  }

  find(query: string) {
    const products = this.data.getValue();
    const newProducts = this.originalData.filter((prod: Product) => {
      const word = `${prod.id}-${prod.title}-${prod.price}`;
      return word.toLowerCase().includes(query.toLowerCase())
    });

    this.data.next(newProducts);
  }

  disconnect(): void {
    
  }

} 
