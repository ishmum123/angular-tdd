import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTextComponent } from './simple-text.component';

describe('SimpleTextComponent', () => {
  let component: SimpleTextComponent;
  let fixture: ComponentFixture<SimpleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have text displayed', () => {
    expect(fixture.nativeElement.querySelector('p').innerText).toBe('Hello World!');
  });
});
