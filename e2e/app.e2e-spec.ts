import { PartyManage2Page } from './app.po';

describe('party-manage2 App', () => {
  let page: PartyManage2Page;

  beforeEach(() => {
    page = new PartyManage2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
