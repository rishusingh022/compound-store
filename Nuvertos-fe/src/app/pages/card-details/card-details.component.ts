import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from 'src/app/services/compound.service';
import { Compound } from '../../constant/type'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent {
  
  id:string = '';
  compound: Compound = {
    id: 0,
    compoundName: '',
    compoundDescription: '',
    compoundImage: ''
  }
  
  openEditModal:boolean = false;
  openDeleteModal:boolean = false;

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.compoundService.getCompound(this.id).subscribe((compound) => (this.compound = compound), (error) => this.router.navigate(['/404']));
    
  }; 

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
