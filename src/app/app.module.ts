import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SimpleTextComponent} from './simple-text/simple-text.component';
import {ButtonPressComponent} from './button-press/button-press.component';
import {InputSubmitButtonPressComponent} from './input-submit-button-press/input-submit-button-press.component';
import {EventEmissionOnFormSubmitComponent} from './event-emission-on-form-submit/event-emission-on-form-submit.component';
import {ReceiveEventFromChildComponent} from './receive-event-from-child/receive-event-from-child.component';
import {ServiceMethodCallOnChildEmissionComponent} from './service-method-call-on-child-emission/service-method-call-on-child-emission.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTextComponent,
    ButtonPressComponent,
    InputSubmitButtonPressComponent,
    EventEmissionOnFormSubmitComponent,
    ReceiveEventFromChildComponent,
    ServiceMethodCallOnChildEmissionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
