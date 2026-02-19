require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/**_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: '',
      show: true,
      windowSize: '1200x900',
      browser: 'chromium',
      waitForNavigation: 'domcontentloaded'
    },
    ChaiWrapper: {
      require: "codeceptjs-chai"
    },
    REST: {
      endpoint: '',
    }
  },
  include: {
    // Fragments
    cookiesFragment: './fragments/cookies-fragment.ts',
    footerFragment: './fragments/footer-fragment.ts',
    offerSearchFragment: './fragments/offer-search-fragment.ts',
    // Pages
    termsAndConditionsPage: './pages/terms-and-conditions-page.ts',
    homePage: './pages/home-page.ts',
    responsibleGamingPage: './pages/responsible-gaming-page.ts',
    privacyPolicyPage: './pages/privacy-policy-page.ts',
    // Proxies
    usersProxy: './proxy/users-proxy.ts'
  },
  name: 'typescript-boilerplate',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: './step_definitions/*-steps.ts'
  },
  fullPromiseBased: true,
}