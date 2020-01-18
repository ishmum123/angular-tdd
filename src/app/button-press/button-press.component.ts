import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-press',
  template: `
      <button type="button" (click)="b = !b">Change</button>
  `
})
export class ButtonPressComponent {
  b = true;
}
