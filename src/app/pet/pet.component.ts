import { Component, OnInit } from '@angular/core';
import { PetService } from '../shared/pet.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  public list = [];
  public errorMsg;
  constructor(private service : PetService) { }

  ngOnInit() {
    console.warn("ngOnInit - pet");
     this.service.displayPets("Cat").subscribe(data => this.list = data,
                error => this.errorMsg = error);
  }

}
