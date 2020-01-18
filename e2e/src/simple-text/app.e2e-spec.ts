import { SimpleTextPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project Simple Text', () => {
  let page: SimpleTextPage;

  beforeEach(() => {
    page = new SimpleTextPage();
  });

  it('should display basic text', () => {
    page.navigateTo();
    expect(page.getText()).toEqual('Hello World!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
