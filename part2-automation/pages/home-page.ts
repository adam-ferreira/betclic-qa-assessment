const { I } = inject();

class HomePage {
  // locators

  private mainPageUrl = "https://www.betclic.fr/";

  // methods

  public async goToMainPage(): Promise<void> {
    await I.amOnPage(this.mainPageUrl);
  }
}

export = new HomePage();
