import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewrecipe',
  templateUrl: './viewrecipe.component.html',
  styleUrls: ['./viewrecipe.component.css']
})
export class ViewrecipeComponent implements OnInit {

  constructor() { }

  recipeData=[{"id":1,"name":"Briyani","dishtype":"Main dish","ingredients":"Basumati rice,Chicken,Ghee and Briyani masala"},{"id":2,"name":"Lime juice","dishtype":"Drink","ingredients":"Water,Sugar,Lemon and Ice cubes"},{"id":3,"name":"Oreo Milkshake","dishtype":"Dessert","ingredients":"Oreo Cookies,Milk,Vanila icecream,chocolate sauce and sugar"},{"id":4,"name":"Fruit Salad","dishtype":"Salad","ingredients":"Strawberries,Raspberries,grapes,apples,banana and yogurt"},{"id":5,"name":"Apple Juice","dishtype":"Drink","ingredients":"Apples,Water,Sugar and Icecubes"}]

  ngOnInit(): void {
  }

}
