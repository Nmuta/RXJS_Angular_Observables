import { FirehousePage } from './app.po';

describe('firehouse App', () => {
  let page: FirehousePage;

  beforeEach(() => {
    page = new FirehousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
