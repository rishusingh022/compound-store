import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent {
  @Input() newCompound: any = {};
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeCreateModalFunc(){
    this.close.emit();
  }
}
