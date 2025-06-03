import { url } from "inspector";
import { expect, Locator, Page } from "playwright/test";
import ApplicationUrl from "../helpers/ApplicationUrl";
import UseerCredentials from "../helpers/UserCredentials";

export default class LoginPage{

usernameField: Locator;
passwordField: Locator;
loginButton: Locator;


    //protected page: Page; //אופציונלי 

    constructor(protected page: Page) {
        //this.page = page; אופציונלי 
        this.usernameField = this.page.locator('[data-test="username"]');
        this.passwordField = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

    }

    public async loginToApplication(username = UseerCredentials.Sdanard_User, password = UseerCredentials.Correct_password, url = ApplicationUrl.Base_Url){
        //option 1
        // await this.page.locator('[data-test="username"]').fill('standard_user');
        // await this.page.locator('[data-test="password"]').fill('secret_sauce');
        // await this.page.locator('[data-test="login-button"]').click();
        await this.page.goto(url);
        await this.validateBseUrl(ApplicationUrl.Base_Url);
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();


    }

    public async validateBseUrl(url: string){
        await expect(this.page).toHaveURL(url, {timeout: 30000});
       

    }
    // public async validateLogin(username: string,password:string){
    //     await expect(this.usernameField).toContainText('standard_user');
    //     await expect(this.passwordField).toContainText('secret_sauce');

    // }
}  