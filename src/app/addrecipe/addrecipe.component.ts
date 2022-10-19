import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor() { }
  name=""
  dishtype=""
  ingredients=""

  readValue=()=>{
    let data={
      "name":this.name,
      "dishtype":this.dishtype,
      "ingredients":this.ingredients
    }
    console.log(data)
    alert("Successfully added")
    this.name=""
    this.dishtype=""
    this.ingredients=""
  }

  ngOnInit(): void {
  }

}
