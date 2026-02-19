const { footerFragment } = inject();
let state = {};

Before(() => {
  state = {};
});

When('the user goes to the link in footer', async (dataTable: any) => {
  await footerFragment.goToFooterLink(dataTable, state);
});

Then('the user should see text content in the page', () => {
  footerFragment.validateContent(state, 'currentDescription', 'expectedDescription');
});

