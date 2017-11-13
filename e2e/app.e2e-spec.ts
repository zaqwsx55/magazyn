import { MagazynPage } from './app.po';

describe('magazyn App', () => {
  let page: MagazynPage;

  beforeEach(() => {
    page = new MagazynPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
