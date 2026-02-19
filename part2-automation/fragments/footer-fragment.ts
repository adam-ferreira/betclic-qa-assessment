const { I, homePage, termsAndConditionsPage, responsibleGamingPage, privacyPolicyPage, cookiesFragment } = inject();

class FooterFragment {
  // locators

  // methods

  public async goToFooterLink(dataTable: any, state: any): Promise<void> {
    let i = 0;
    while (dataTable.parse().hashes()[i] != undefined) {
      state["expectedDescription" + i] = dataTable.parse().hashes()[
        i
      ].expectedDescription;
      let buttonLocatorFromGherkin = eval(
        `${dataTable.parse().hashes()[i].item}Page.${
          dataTable.parse().hashes()[i].item
        }Button`
      );
      let pageContentLocatorFromGherkin = eval(
        `${dataTable.parse().hashes()[i].item}Page.pageContent`
      );
      await cookiesFragment.dismissPrivacyOverlay();
      await I.executeScript('window.scrollTo(0, document.body.scrollHeight)');
      await I.waitForElement(buttonLocatorFromGherkin, 15);
      await I.scrollTo(buttonLocatorFromGherkin);
      await cookiesFragment.dismissPrivacyOverlay();
      await I.click(buttonLocatorFromGherkin);
      await I.waitForElement(pageContentLocatorFromGherkin, 15);
      state["currentDescription" + i] = await I.grabTextFrom(
        pageContentLocatorFromGherkin
      );
      await homePage.goToMainPage();
      await cookiesFragment.dismissPrivacyOverlay();
      i++;
    }
  }

  public validateContent(state: any, current: string, expected: string): void {
    let i = 0;
    while (state[current + i] != undefined) {
      I.assertContain(
        state[current + i].replace(/\n/g, " ").replace(/ +/g, " ").trim(),
        state[expected + i]
      );
      i++;
    }
  }
}

export = new FooterFragment();
