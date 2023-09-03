import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit, OnDestroy {
  @Input() compound: any = {};

  noChangesDetected: boolean = false;
  originalCompound: any; //new variable to hold the original values
  private _subscription: Subscription = new Subscription();

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private route: ActivatedRoute,
    private compoundService: CompoundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.originalCompound = JSON.parse(JSON.stringify(this.compound));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  closeEditModalFunc() {
    this.close.emit();
  }

  saveChangesFunc() {
    //Only proceed if changes have been made
    if (
      JSON.stringify(this.compound) !== JSON.stringify(this.originalCompound)
    ) {
      const updatedCompound = {
        id: Number(this.compound.id),
        compoundName: this.compound.compoundName,
        compoundDescription: this.compound.compoundDescription,
        compoundImage: this.compound.compoundImage,
      };

      this._subscription.add(
        this.compoundService.updateCompound(updatedCompound).subscribe(
          () => {
            console.log('Compound updated');
            this.originalCompound = JSON.parse(JSON.stringify(this.compound)); //Set the new originalCompound
            this.close.emit();
          },
          (error) => console.log(error.message)
        )
      );
    } else {
      this.noChangesDetected = true;
      console.log('No changes detected, not saving.');
    }
  }
}
