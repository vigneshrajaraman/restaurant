import { Component, OnInit } from '@angular/core';
import { PromotionService } from '../service/promotion.service';
import { DishService } from '../service/dish.service';
import { LeaderService } from '../service/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private promotionService:PromotionService, private dishService:DishService, private leaderService:LeaderService) { }
  dishs;
  promotions;
leaders;
  ngOnInit(): void {
    this.dishs=this.dishService.getFeatureDish();
    this.promotions=this.promotionService.getAllPromotion();
    this.leaders=this.leaderService.getAllLeaders();
  }

}
