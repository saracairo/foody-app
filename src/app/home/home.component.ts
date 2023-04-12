import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
  // ActivatedRoute ascolterà il searchTerm nell'url; si inietta nel costruttore del componente che deve aver accesso alle route;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
    // "= []" inizializza la proprietà di tipo String[];
    // per far sì che possa assegnargli il tipo Food, importo il modello Food da shared/models.

  constructor(
    private foodService: FoodService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else if(params['tag']) {
        this.foods = this.foodService.getAllFoodsByTag(params['tag']);
      } else {
        this.foods = this.foodService.getAll();
          // ogni volta che questo parametro cambia, notifica questa funzione che lo inserirà dentro subscribe
      }
    })
  }

}
