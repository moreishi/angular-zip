import { AngularZipPage } from './app.po';

describe('angular-zip App', () => {
  let page: AngularZipPage;

  beforeEach(() => {
    page = new AngularZipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
