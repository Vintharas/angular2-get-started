import { Angular2GetStartedSamplePage } from './app.po';

describe('angular2-get-started-sample App', function() {
  let page: Angular2GetStartedSamplePage;

  beforeEach(() => {
    page = new Angular2GetStartedSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
