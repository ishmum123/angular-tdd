import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-event-emission-on-form-submit',
  template: `
      <label for="ni">Value1</label>
      <input type="number" id="ni" #ni>
      <label for="ti">Value2</label>
      <input type="text" id="ti" #ti>
      <button type="button" (click)="submit(ni.value, ti.value)">Save</button>
  `
})
export class EventEmissionOnFormSubmitComponent {
  @Output() formSubmissionEmitter = new EventEmitter<{ value1: number, value2: string }>();

  submit(v1: string, v2: string) {
    this.formSubmissionEmitter.emit({value1: parseInt(v1, 10), value2: v2});
  }
}
