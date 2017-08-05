import { MyGalleryPage } from './app.po';

describe('my-gallery App', () => {
  let page: MyGalleryPage;

  beforeEach(() => {
    page = new MyGalleryPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
