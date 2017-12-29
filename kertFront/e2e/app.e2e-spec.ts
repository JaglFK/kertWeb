import { KertFrontPage } from './app.po';

describe('kert-front App', function() {
  let page: KertFrontPage;

  beforeEach(() => {
    page = new KertFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
