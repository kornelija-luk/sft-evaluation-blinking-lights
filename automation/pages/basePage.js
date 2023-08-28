import { menu } from "../components/menu";

export class basePage {
    constructor(page) {
        this.page = page;
        this.menu = new menu(this.page)
        this.title = page.locator('div.v-toolbar__title > span');
    }
}