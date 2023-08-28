export class menu {
    constructor(page) {
        this.page = page;
        this.menuButton = page.locator('div.v-toolbar__content div.v-toolbar__title button');
    }

    async _getButtonInMenu(buttonText) {
        return await this.page.locator(`//a[contains(.,"${buttonText}")]`);
    }

    async clickMenuButton() {
        await this.menuButton.click();
    }

    async clickButtonInMenu(buttonText) {
        await (await this._getButtonInMenu(buttonText)).click();
    }
    
}