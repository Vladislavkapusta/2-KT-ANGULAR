// recipe.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return fetch(this.apiUrl)
      .then(response => response.json())
      .then(data => {
        // console.log(data.recipes)
        return data.recipes; // возвращаем только recipes из объекта data
      })
    }
}
