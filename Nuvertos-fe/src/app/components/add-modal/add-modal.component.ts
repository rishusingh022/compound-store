import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {
  @Input() newCompound: any = {};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }

  closeCreateModalFunc(){
    this.close.emit();
  }

  onSubmit(){
    console.log(this.newCompound);
    const newCompound = {
      compoundName: this.newCompound.name,
      compoundDescription: this.newCompound.description,
      compoundImage: this.newCompound.imgURL
    };

    console.log(newCompound);

    this.compoundService.addCompound(newCompound).subscribe(() => {
      this.router.navigate(['/compounds']);
      window.location.reload();
    }, error => console.log(error));
    
    this.newCompound = {};
    this.closeCreateModalFunc();
  }
}
