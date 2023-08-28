export class randomPage {
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://myanimelist.net/');
    }
}