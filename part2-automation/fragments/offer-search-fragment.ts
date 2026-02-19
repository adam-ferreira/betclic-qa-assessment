const { I } = inject();

class OfferSearchFragment {
  // locators
  searchInput = ".forms_inputText";
  searchResults = "//sports-search-page";

  resultItem = '//sports-search-page//div[@class="event"]';

  noResultIcon = '//div[@class="errorPage_header"]';
  noResultTextTitle =
    '//div[@class="errorPage_content"]//div[contains(@class,"contentTitle")]';
  noResultTextDescription =
    '//div[@class="errorPage_content"]//div[contains(@class,"contentDescription")]';

  // methods

  public async typeInTheSearch(input: string): Promise<void> {
    await I.fillField(this.searchInput, input);
    await I.waitForResponse(
      (response) =>
        response.status() === 200 &&
        response
          .url()
          .includes("https://offering.begmedia.com/web/offering.access.api/offering.access.api.SearchService/SearchMatchesWithNotifications"),
      10
    );
  }

  public async validateAtLeastOneResult(): Promise<void> {
    await I.waitForElement(this.resultItem, 10);
    const count = await I.grabNumberOfVisibleElements(this.resultItem);
    I.assertAbove(count, 0);
  }

  public async validateNoContent(dataTable: any): Promise<void> {
    const currentTextTitle = await I.grabTextFrom(this.noResultTextTitle);
    const expectedTitle = dataTable.parse().hashes()[0].expectedTitle;
    const currentTextDescription = await I.grabTextFrom(
      this.noResultTextDescription
    );
    const expectedDescription = dataTable
      .parse()
      .hashes()[0].expectedDescription;

    I.assertContain(currentTextTitle, expectedTitle);
    I.assertContain(currentTextDescription, expectedDescription);
  }
}

export = new OfferSearchFragment();
