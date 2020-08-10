import { Component, OnInit } from '@angular/core';
import { Dish } from '../model/dish';
import { DishService } from '../service/dish.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dishService:DishService, private route:Router) { }

  dishes: Dish[] ;
  ngOnInit(): void {
    this.dishes=this.dishService.getAllDishs();
  }
  goDish(id){
    console.log(id);
    this.route.navigate(['dish',id]);
  }
}
