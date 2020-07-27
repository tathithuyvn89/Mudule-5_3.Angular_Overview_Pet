import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'puppie';
  petImage = 'https://taoanhonline.com/wp-content/uploads/2020/02/anh-doremon-1.png?v=1582383623';

  constructor() {}
  updateName(name){
    this.petName = name;
  }
  // tslint:disable-next-line:typedef
  updateImage(image) {
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
