import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-simple-text',
  template: `<p>{{text}}</p>`
})
export class SimpleTextComponent {
  text = 'Hello World!';
}
