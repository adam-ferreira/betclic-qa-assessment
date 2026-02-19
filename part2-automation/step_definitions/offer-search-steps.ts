const { offerSearchFragment } = inject();

Before(() => {
  state = {};
});

When(
  /the user searches matches or competitions with the input (.*)/,
  async (input: string) => {
    await offerSearchFragment.typeInTheSearch(input);
  }
);

Then(
  "the user should should see an error message as search result",
  async (dataTable: any) => {
    await offerSearchFragment.validateNoContent(dataTable);
  }
);

Then("the user should see at least one result", async () => {
  await offerSearchFragment.validateAtLeastOneResult();
});
