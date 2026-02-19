const { I } = inject();

class PrivacyPolicyPage {
  // locators
  privacyPolicyButton = "//bc-footer-links//a[@href='/privacypolicy']";
  pageContent = '//div[contains(@class,"contentPage_section")]//p[1]';

  // methods
}

export = new PrivacyPolicyPage();
