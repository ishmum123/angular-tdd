import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSubmitButtonPressComponent } from './input-submit-button-press.component';
import {By} from '@angular/platform-browser';

describe('InputSubmitButtonPressComponent', () => {
  let component: InputSubmitButtonPressComponent;
  let fixture: ComponentFixture<InputSubmitButtonPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSubmitButtonPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSubmitButtonPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should change value on button click', () => {
    expect(component.value).toBe(undefined);
    fixture.nativeElement.querySelector('#ti').value = 'Hello';
    // fixture.debugElement.query(By.css('#ti')).nativeElement.value = 'Hello';
    fixture.nativeElement.querySelector('button').click();
    expect(component.value).toBe('Hello');
  });
});
