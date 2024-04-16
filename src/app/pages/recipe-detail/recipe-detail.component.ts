import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe-service/recipe-service';
import { Location } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent implements OnInit {
  public id: number;
  public recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private location: Location
  ) { }

  goBack() {
    this.location.back(); //Navigates back in platform's history
}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getRecipe()
    });
  }

  getRecipe(): void {
    this.recipeService.getRecipes().then(recipes => {
      this.recipe = recipes.find((recipe: any) => recipe.id === +this.id);
      // console.log(recipes.find((recipe: any) => recipe.id === +this.id))
      // console.log(this.recipe)
    });
  }
}
