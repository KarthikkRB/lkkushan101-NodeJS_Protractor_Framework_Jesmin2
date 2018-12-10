var homePage = require('./HomePage.js');
var data = require('./data.json');
var signInPage = require('./SignInPage.js');
describe('Go to home page login and search', function() {
  it('Go to home page and login', function() {
      browser.ignoreSynchronization = true;
      homePage.get();
      browser.waitForAngularEnabled(false) 
      homePage.clickLogin();
      browser.waitForAngularEnabled(false);
      signInPage.setEmail(data.email);
      signInPage.setPassword(data.password);
      signInPage.clickSubmit();
  });
});