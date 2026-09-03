import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

type MyFixture = {
    startPage: LoginPage
}

export const myTest = base.extend<MyFixture>({

    startPage: async ( { page }, use ) => {
        
        const loginPage = new LoginPage(page);
        await page.goto('/');
        await loginPage.login('Admin', 'admin123');
        await loginPage.clickLoginBtn();
        await use(loginPage);
    }
});

export{ expect };