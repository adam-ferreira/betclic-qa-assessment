/// <reference types='codeceptjs' />
type cookiesFragment = typeof import('./fragments/cookies-fragment');
type footerFragment = typeof import('./fragments/footer-fragment');
type offerSearchFragment = typeof import('./fragments/offer-search-fragment');
type termsAndConditionsPage = typeof import('./pages/terms-and-conditions-page');
type homePage = typeof import('./pages/home-page');
type responsibleGamingPage = typeof import('./pages/responsible-gaming-page');
type privacyPolicyPage = typeof import('./pages/privacy-policy-page');
type usersProxy = typeof import('./proxy/users-proxy');
type ChaiWrapper = import('codeceptjs-chai');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, cookiesFragment: cookiesFragment, footerFragment: footerFragment, offerSearchFragment: offerSearchFragment, termsAndConditionsPage: termsAndConditionsPage, homePage: homePage, responsibleGamingPage: responsibleGamingPage, privacyPolicyPage: privacyPolicyPage, usersProxy: usersProxy }
  interface Methods extends PlaywrightTs, ChaiWrapper, RESTTs {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
