import { Component, OnInit } from '@angular/core';
import { PetService } from '../typescript-angular-client/api/pet.service';
import { Pet } from '../typescript-angular-client/model/pet';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  response:string;
  pet: Pet;

  constructor(private petService: PetService) {
    this.response = '';
  }

  ngOnInit() {
    this.pet = {
      id: 1,
      name: 'Test',
      photoUrls: []
    };
    console.log('Pet: ', this.pet);
    this.petService.addPet(this.pet).subscribe(postRes => {
      console.log('Post response: ', postRes);
      this.petService.getPetById(1).subscribe(getRes => {
        console.log('Get response: ', getRes);
        this.response = getRes.toString();
      });
    });
  }

}
