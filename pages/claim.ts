import { Page, Locator } from "@playwright/test";

export class ClaimPage {
    readonly page: Page;
    readonly claimOption: Locator;
    readonly assignClaimButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.claimOption = page.getByText('Claim');
        this.assignClaimButton = page.getByRole('button', { name: ' Assign Claim '})
    }

    async clickClaimOption() {
        await this.claimOption.click();
    }

    async clcikAssignClaimButton() {
        await this.assignClaimButton.click();
    }
}