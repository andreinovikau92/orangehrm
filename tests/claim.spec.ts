import { myTest, expect } from "../fixtures/fixture";
import { ClaimPage} from "../pages/claim";

myTest.describe('Claim Page', () => {

    myTest.only('Verify after clicking the Claim option on the side menu the Claim page is opened', async ({ page, startPage }) => {
        const claimPage = new ClaimPage(page);
        await claimPage.clickClaimOption();
        await expect(page).toHaveURL(/viewAssignClaim/);
        const employeeClaim = page.locator('h5').getByText('Employee Claims');
        await expect(employeeClaim).toBeVisible();
    });
})