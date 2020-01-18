import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReceiveEventFromChildComponent} from './receive-event-from-child.component';
import {EventEmissionOnFormSubmitComponent} from '../event-emission-on-form-submit/event-emission-on-form-submit.component';

describe('ReceiveEventFromChildComponent', () => {
  let component: ReceiveEventFromChildComponent;
  let fixture: ComponentFixture<ReceiveEventFromChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveEventFromChildComponent, EventEmissionOnFormSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveEventFromChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should save emitted value of child', () => {
    expect(component.receivedValue).toBe(undefined);
    fixture.nativeElement.querySelector('#ni').value = '10';
    fixture.nativeElement.querySelector('#ti').value = 'is a good number';
    fixture.nativeElement.querySelector('button').click();
    expect(component.receivedValue.value2).toBe('is a good number');
  });
});
