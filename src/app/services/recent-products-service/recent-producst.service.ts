// recent-products.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class recentProductsService {
  private readonly maxHistoryLength = 6;
  public recentId: number[] = [];
  public recentProducts:  any[];

  constructor() {
    const storedProducts = localStorage.getItem('recentId');
    if (storedProducts) {
      this.recentId = JSON.parse(storedProducts);
    }
  }

  addTorecentId(productId: number) {
    const index = this.recentId.indexOf(productId);
    if (index !== -1) {
      this.recentId.splice(index, 1);
    }
    this.recentId.unshift(productId);
    if (this.recentId.length > this.maxHistoryLength) {
      this.recentId.pop();
    }
    localStorage.setItem('recentId', JSON.stringify(this.recentId));
    this.getrecentId();
    console.log(this.recentProducts)
  }

  getrecentId() {
    return fetch('https://dummyjson.com/recipes')
      .then(response => response.json())
      .then(data => {




        // console.log(data.recipes.filter((product: any) => product.id === this.recentId[0] || product.id === this.recentId[1]
        // || product.id === this.recentId[2] || product.id === this.recentId[3] || product.id === this.recentId[4] || product.id === this.recentId[5]))





        this.recentProducts = data.recipes.filter((product: any) => product.id === this.recentId[0] || product.id === this.recentId[1]
        || product.id === this.recentId[2] || product.id === this.recentId[3] || product.id === this.recentId[4] || product.id === this.recentId[5]) 




        console.log(this.recentProducts)
        return (this.recentProducts)
      }
    )
  }
  getRecentRecepies(){
    console.log(this.recentProducts)
    // 
  }
}