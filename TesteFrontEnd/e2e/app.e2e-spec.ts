import { TesteFrontEndPage } from './app.po';

describe('teste-front-end App', () => {
  let page: TesteFrontEndPage;

  beforeEach(() => {
    page = new TesteFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
