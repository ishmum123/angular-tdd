import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-receive-event-from-child',
  template: `
      <app-event-emission-on-form-submit (formSubmissionEmitter)="receivedValue = $event"></app-event-emission-on-form-submit>
  `
})
export class ReceiveEventFromChildComponent {
  receivedValue: { value1: number; value2: string };
}
