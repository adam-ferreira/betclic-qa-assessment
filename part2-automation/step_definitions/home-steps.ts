const { homePage, cookiesFragment } = inject();

Given('a user coming to Betclic', async () => {
  await homePage.goToMainPage();
  await cookiesFragment.rejectCookies();
});

