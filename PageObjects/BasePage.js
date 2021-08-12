class BasePage{
    constructor (page) {
        this.page = page
    }

    async gotoUrl (url) {
        await this.page.goto(url)
    }

    async clickBtn (selector) {
       await this.page.click(selector)
    }

    async typeInField (selector, data) {
        await this.page.type(selector, data)
    }

    async waitForElement (selector) {
        await this.page.waitForSelector(selector)
    }

    async curruntUrl () {
        return this.page.url()
    }

    async selectDropDownOption (selector, data) {
        await this.page.select(selector, data)
    }

    async takeScreenshoot () {
        await this.page.screenshot ({
            path: './screenshot.jpg',
            fullPage: true,
            type: 'jpeg'
            });
    }

}
module.exports = BasePage;