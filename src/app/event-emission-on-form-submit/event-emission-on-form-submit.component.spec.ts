import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventEmissionOnFormSubmitComponent} from './event-emission-on-form-submit.component';
import {By} from '@angular/platform-browser';

describe('EventEmissionOnFormSubmitComponent', () => {
  let component: EventEmissionOnFormSubmitComponent;
  let fixture: ComponentFixture<EventEmissionOnFormSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventEmissionOnFormSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventEmissionOnFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should emit form values on button click', () => {
    component.formSubmissionEmitter.subscribe(form => expect(form.value1).toBe(5));
    fixture.nativeElement.querySelector('#ni').value = '5';
    fixture.nativeElement.querySelector('#ti').value = 'Hello';
    fixture.nativeElement.querySelector('button').click();
  });
});
