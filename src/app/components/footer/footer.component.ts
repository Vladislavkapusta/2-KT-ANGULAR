import { Component, OnInit } from '@angular/core';
import { recentProductsService } from '../../services/recent-products-service/recent-producst.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  constructor(
    private recentProductsService: recentProductsService
  ) { }
  public recentRecepies: any[]
  public isShow: boolean = true

  ngOnInit(): void {
    this.recentProductsService.getrecentId().then((recipes: any) => {
      this.recentRecepies = recipes
  })
  this.recentProductsService.getRecentRecepies()
}
}
// Я СДАЮСЬ. Я не знаю как это победить. Пусть будет надпись только, что поделать.
