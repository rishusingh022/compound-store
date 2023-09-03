import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeEditModalFunc(){
    this.close.emit();
  }
}
