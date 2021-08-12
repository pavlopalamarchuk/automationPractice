const selectors = require('../Helpers/Selectors');
const testData = require('../Helpers/testData');
const BasePage = require('../PageObjects/BasePage')

class SignInPage extends BasePage{
    constructor(page) {
        super(page)
        this.emailInput = selectors.emailInput
        this.passwordInput = selectors.passwordInput
        this.submitLoginBtn = selectors.submitLoginBtn
        this.emailData = testData.email
        this.passwordData = testData.password
    }
    

    async fillInSignInForm () {
        await this.typeInField(this.emailInput,  this.emailData)
        await this.typeInField(this.passwordInput, this.passwordData)
    }

    async submitSignInForm () {
        await this.clickBtn(this.submitLoginBtn)
    }
}
module.exports = SignInPage;