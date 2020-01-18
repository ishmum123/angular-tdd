import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-submit-button-press',
  template: `
    <label for="ti">Value</label>
    <input type="text" id="ti" #ti>
    <button type="button" (click)="value = ti.value">Save</button>
  `
})
export class InputSubmitButtonPressComponent {
  value: string;
}
