import { Pso2UnitSimPage } from './app.po';

describe('pso2-unit-sim App', () => {
  let page: Pso2UnitSimPage;

  beforeEach(() => {
    page = new Pso2UnitSimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
