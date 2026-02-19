const { I } = inject();

class CookiesFragment {
  // locators
  private rejectCookiesButton = "//button[contains(text(),'Continuer sans accepter')]";
  private privacyOverlay = "#privacy-overlay";

  // methods
  public async rejectCookies(): Promise<void> {
    const numVisible = await I.grabNumberOfVisibleElements(this.rejectCookiesButton);
    if (numVisible > 0) {
      await I.click(this.rejectCookiesButton);
    }
    await this.dismissPrivacyOverlay();
  }

  public async dismissPrivacyOverlay(): Promise<void> {
    await I.executeScript('const el = document.querySelector("#privacy-overlay"); if (el) el.remove();');
  }
}

export = new CookiesFragment();
