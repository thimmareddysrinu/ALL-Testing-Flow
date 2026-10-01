import {Page,expect} from "@playwright/test"
import {getSauceDemoEnvironment} from '../config/environments'
export class BasePage{
    protected page:Page

    

    constructor(page:Page){
        this.page=page

    }

    async navigateTo(url:string){
        await this.page.goto(url)
    }
    async loginpagepage(url:string,username:string,password:string){
        await this.page.goto(url)
        await this.page.waitForLoadState('networkidle')
        await this.page.getByPlaceholder('Username').fill(username)
        await this.page.getByPlaceholder('Password').fill(password)
        await this.page.getByRole('button',{name:'Login'}).click()
    }

}