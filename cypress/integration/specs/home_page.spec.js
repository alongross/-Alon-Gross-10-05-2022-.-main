import homepage from "../page_objects/home_page";
describe('Testing automation herolo', () => {
  beforeEach(() => {
    homepage.error();
  })
  afterEach(() => {
    homepage.error();
  })  
  it('Testing to see if there is games without betting', () => {
    homepage.apireq();
  });
});
