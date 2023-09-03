import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  @Input() compound: any = {};

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  closeEditModalFunc(){
    this.close.emit();
  }

  saveChangesFunc(){
    const updatedCompound = {
      id: Number(this.compound.id),
      compoundName: this.compound.compoundName,
      compoundDescription: this.compound.compoundDescription,
      compoundImage: this.compound.compoundImage,
    };
    this.compoundService.updateCompound(updatedCompound).subscribe(() => {
      console.log('Compound updated');
    }, error => console.log(error.message));
    this.close.emit();
  }
}
