import { Angular2BasicsPage } from './app.po';

describe('angular2-basics App', () => {
  let page: Angular2BasicsPage;

  beforeEach(() => {
    page = new Angular2BasicsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
