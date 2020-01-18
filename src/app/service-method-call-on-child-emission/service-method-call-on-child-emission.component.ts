import {Component, OnInit} from '@angular/core';
import {ExternalApiService} from '../external-api/external-api.service';

@Component({
  selector: 'app-service-method-call-on-child-emission',
  template: `
      <app-event-emission-on-form-submit (formSubmissionEmitter)="service.getGoogle($event.value2)"></app-event-emission-on-form-submit>
  `
})
export class ServiceMethodCallOnChildEmissionComponent {
  constructor(private service: ExternalApiService) {
  }
}
