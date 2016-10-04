import { browser, element, by } from 'protractor';

export class DemoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fau-root h1')).getText();
  }
}
