import { Component, Input, Output, EventEmitter, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompoundService } from '../../services/compound.service';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {
  id: string = '';
  
  constructor(private route: ActivatedRoute, private compoundService: CompoundService, private router: Router) { }
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  closeAlertModalFunc(){
    this.close.emit();
  }

  deleteCompoundFunc(){
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.compoundService.deleteCompound(this.id).subscribe(() => {
      this.router.navigate(['/compounds']);
    }, error => console.log(error));
    this.closeAlertModalFunc();
  }
}
