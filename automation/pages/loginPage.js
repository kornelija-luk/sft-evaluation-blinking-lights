import { loginInformation } from "../data-classes/loginInformation";

export class loginPage {
    constructor(page) {
        this.page = page;
        this.emailField = page.locator('input[name="email"]');
        this.passwordField = page.locator('input[name="password"]');
        this.loginButton = page.locator('//button[contains(.,"Login")]');
    }

    async goto() {
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    /**
     * Method use to login to the website when in the login page
     * @param {loginInformation} loginInformation 
     */
    async login(loginInformation) {
        await this.emailField.fill(loginInformation.email);
        await this.passwordField.fill(loginInformation.password);
        await this.loginButton.click();
    }
}