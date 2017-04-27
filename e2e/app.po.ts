import { browser, element, by } from 'protractor';

export class Pso2UnitSimPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
