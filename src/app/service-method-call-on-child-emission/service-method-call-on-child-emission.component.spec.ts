import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ServiceMethodCallOnChildEmissionComponent} from './service-method-call-on-child-emission.component';
import {ExternalApiService} from '../external-api/external-api.service';
import {EventEmissionOnFormSubmitComponent} from '../event-emission-on-form-submit/event-emission-on-form-submit.component';

describe('MockServiceMethodCallOnChildEmissionComponent', () => {
  let component: ServiceMethodCallOnChildEmissionComponent;
  let fixture: ComponentFixture<ServiceMethodCallOnChildEmissionComponent>;

  let serviceSpy: { getGoogle: jasmine.Spy };

  beforeEach(async(() => {
    serviceSpy = jasmine.createSpyObj('ExternalApiService', ['getGoogle']);
    TestBed.configureTestingModule({
      declarations: [ServiceMethodCallOnChildEmissionComponent, EventEmissionOnFormSubmitComponent],
      providers: [{provide: ExternalApiService, useValue: serviceSpy}]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMethodCallOnChildEmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should send emitted value of child', () => {
    fixture.nativeElement.querySelector('#ni').value = '10';
    fixture.nativeElement.querySelector('#ti').value = 'is a good number';
    fixture.nativeElement.querySelector('button').click();
    fixture.detectChanges();
    expect(serviceSpy.getGoogle.calls.count()).toBe(1);
    expect(serviceSpy.getGoogle.calls.first().args).toEqual(['is a good number']);
  });
});
