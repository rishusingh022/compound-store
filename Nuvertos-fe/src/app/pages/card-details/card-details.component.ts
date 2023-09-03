import { Component } from '@angular/core';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  
  openEditModal:boolean = false;
  openDeleteModal:boolean = false;

  constructor() { }

  openEditModalFunc(){
    this.openEditModal = true;
  }

  closeEditModalFunc(){
    this.openEditModal = false;
  }

  openDeleteModalFunc(){
    this.openDeleteModal = true;
  }

  closeDeleteModalFunc(){
    this.openDeleteModal = false;
  }
}
