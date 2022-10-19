import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private myapis:ApiService) { }
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
    this.myapis.addRecipe(data).subscribe(
      (response)=>{
        console.log(response)
      }
    )
    this.name=""
    this.dishtype=""
    this.ingredients=""
  }

  ngOnInit(): void {
  }

}
