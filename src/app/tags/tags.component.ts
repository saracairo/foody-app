import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/Tag';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  tags?: Tag[]; // valore di default: array vuoto

  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = "center"; // "center" valore di default

  constructor(
    private foodService: FoodService
  ) {}

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}
