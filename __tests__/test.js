jest.setTimeout(30000)
const timeout = 30000
const testData = require('../Helpers/testData');
const apiCalls = require('../Helpers/ApiCalls');
const {HomePage, SignInPage, MyAccountPage} = require('../PageObjects');
const { reporters } = require('../jest.config');

describe(
  '/ (Home Page)',
  () => {
    let page
    beforeAll(async () => {
      page = await global.__BROWSER__.newPage()
     await page.setViewport({ width: 1920, height: 1080})
      homePage = new HomePage(page)
      signInPage = new SignInPage(page)
      myAccountPage = new MyAccountPage(page)

    }, timeout)

    afterAll(async () => {
      await page.close()
    })
  
    it('should sign in', async () => {
      await homePage.clickSignInBtn()
      let curruntUrl = await signInPage.curruntUrl()
      expect(curruntUrl === testData.autentificationUrl, `${curruntUrl} is wrong`).toBe(true)
      await signInPage.fillInSignInForm()
      await signInPage.submitSignInForm()
      await myAccountPage.takeScreenshootOnPage()
      curruntUrl = await myAccountPage.curruntUrl()
      expect(curruntUrl === testData.myAccountUrl, `${curruntUrl} is wrong`).toBe(true)
    })

    it('should logIn and logOut via API', async () => {
      const logInResponse = await apiCalls.logIn(testData.logInUrl, {email: testData.email, passwd: testData.password})
      expect(logInResponse.status === 200, `${logInResponse.status} is wrong status code`).toBe(true)
      const LogOutResponse = await apiCalls.logOut(testData.logOutUrl)
      expect(LogOutResponse.status === 200, `${logInResponse.status} is wrong status code`).toBe(true)
    })
  },
  timeout
)
