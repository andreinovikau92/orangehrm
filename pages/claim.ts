import { Page, Locator } from "@playwright/test";

export class ClaimPage {
    readonly page: Page;
    readonly claimOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.claimOption = page.getByText('Claim');
    }

    async clickClaimOption() {
        await this.claimOption.click();
    }
}