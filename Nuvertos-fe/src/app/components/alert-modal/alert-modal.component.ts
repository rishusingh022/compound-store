import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {

  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlertModalFunc(){
    this.close.emit();
  }
}
