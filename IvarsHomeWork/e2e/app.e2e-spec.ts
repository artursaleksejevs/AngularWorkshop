import { IvarsHomeWorkPage } from './app.po';

describe('ivars-home-work App', () => {
  let page: IvarsHomeWorkPage;

  beforeEach(() => {
    page = new IvarsHomeWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
