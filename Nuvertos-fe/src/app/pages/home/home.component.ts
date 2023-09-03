import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  openCreateModal:boolean = false;

  constructor() { }

  openCreateModalFunc(){
    this.openCreateModal = true;
  }

  closeCreateModalFunc(){
    this.openCreateModal = false;
  }
  
}
