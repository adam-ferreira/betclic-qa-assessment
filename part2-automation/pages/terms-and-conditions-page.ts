const { I } = inject();

class TermsAndConditionsPage {
  // locators
  termsAndConditionsButton = "//bc-footer-links//a[@href='/termsandconditions']";
  pageContent = '//div[contains(@class,"contentPage_box")]//p[2]';

  // methods
}

export = new TermsAndConditionsPage();
