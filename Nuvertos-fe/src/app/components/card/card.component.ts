import { Component, Input } from '@angular/core';
import { Compound } from 'src/app/constant/type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() compound: Compound = {
    id: 0,
    compoundName: '',
    compoundDescription: '',
    compoundImage: ''
  };
}
