import { SppdAngularPage } from './app.po';

describe('sppd-angular App', () => {
  let page: SppdAngularPage;

  beforeEach(() => {
    page = new SppdAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
