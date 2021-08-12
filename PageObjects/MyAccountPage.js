const BasePage = require('../PageObjects/BasePage')

class MyAccountPage extends BasePage{
    constructor(page) {
        super(page)
    }

    async takeScreenshootOnPage () {
        await this.takeScreenshoot()
    }

}
module.exports = MyAccountPage;