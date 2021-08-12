const selectors = require('../Helpers/Selectors');
const testData = require('../Helpers/testData');
const BasePage = require('../PageObjects/BasePage')

class HomePage extends BasePage{
    constructor(page) {
        super(page)
        this.url =  testData.baseUrl
        this.signInBtn = selectors.signInBtn
        this.submitLoginBtn = selectors.submitLoginBtn
    }
    
    async clickSignInBtn () {
        await this.gotoUrl(this.url)
        await this.clickBtn(this.signInBtn)
        await this.waitForElement(this.submitLoginBtn)
    }
}
module.exports = HomePage;