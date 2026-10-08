import { myTest, expect } from "../fixtures/fixture";
import { ClaimPage} from "../pages/claim";

myTest.describe('Claim Page', () => {

    myTest('Verify after clicking the Claim option on the side menu the Claim page is opened', async ({ page, startPage }) => {
        const claimPage = new ClaimPage(page);
        await claimPage.clickClaimOption();
        await expect(page).toHaveURL(/viewAssignClaim/);
        const employeeClaim = page.locator('h5').getByText('Employee Claims');
        await expect(employeeClaim).toBeVisible();
    });

    myTest.only('Verify after clicking Assign Claim button Creat Claim Request page is opened', async ({ page, startPage }) => {
        const claimPage = new ClaimPage(page);
        await claimPage.clickClaimOption();
        await claimPage.clcikAssignClaimButton();
        const createClaimRequestHeader = page.locator('h6').getByText('Create Claim Request');
        await expect(createClaimRequestHeader).toBeVisible();
    });
})