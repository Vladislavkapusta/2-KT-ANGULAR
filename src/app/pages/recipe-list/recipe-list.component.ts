import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe-service/recipe-service';
import { recentProductsService } from '../../services/recent-products-service/recent-producst.service';
import { RouterModule } from '@angular/router';
import { FormsModule, NgModel } from '@angular/forms';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterModule, FormsModule, FooterComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  public recipes: any[];
  public difficulty: string = 'all';
  public mealType: string;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private recentProductsService: recentProductsService
  ) { }

  toMemory(num: number): void{
    this.recentProductsService.addTorecentId(num)
  }

  // Метод, который будет вызываться при изменении выбранного варианта в списке
  onDifficultyChange(difficulty: string) {
    this.difficulty = difficulty
    this.changeRecepies()
    // console.log(this.difficulty)
  }

  // goToProduct(id) {
  //   this.$router.push({ path: `/product/${id}` })
  // }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.difficulty = params['difficulty'];
      this.mealType = params['mealType']
      // console.log(this.difficulty)
      // console.log(this.mealType)
      this.getRecipes();
    });
  }

  changeRecepies(): void{
    this.route.params.subscribe(params => {
      this.mealType = params['mealType']
      // console.log(this.difficulty)
      // console.log(this.mealType)
      this.getRecipes();
    });
  }

  getRecipes(): void {
    // console.log(this.difficulty)
    // console.log(this.mealType)
    this.recipeService.getRecipes().then(recipes => {
      // Apply filtering based on difficulty
      

      this.recipes = recipes.filter((recipe: any) => {
        if (this.difficulty === 'all') {
          return recipe.mealType.includes(this.mealType);
          
        } else {
          return recipe.difficulty === this.difficulty && recipe.mealType.includes(this.mealType);

          
        }
      }
    );


    }
  );
  }
}
