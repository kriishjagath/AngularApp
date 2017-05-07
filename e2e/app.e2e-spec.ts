import { AngualrIoPage } from './app.po';

describe('angualr-io App', () => {
  let page: AngualrIoPage;

  beforeEach(() => {
    page = new AngualrIoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
