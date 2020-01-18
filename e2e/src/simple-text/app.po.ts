import { browser, by, element } from 'protractor';

export class SimpleTextPage {
  navigateTo() {
    return browser.get('simple-text') as Promise<any>;
  }

  getText() {
    return element(by.css('app-simple-text p')).getText() as Promise<string>;
  }
}
