import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  @Input() newCompound: any = {
    name: '',
    description: '',
    imgURL: '',
  };
}
