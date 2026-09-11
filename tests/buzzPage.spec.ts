import { myTest, expect } from '../fixtures/fixture';
import { BuzzPage } from '../pages/buzz';

myTest.describe('Buzz Page', () => {

    myTest('Verify after clicking the Buzz option on the side menu the Buzz page is opened', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toHaveText('Buzz')
    });

    myTest('Verify the buss post is posted', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.fillPostField('test');
        await buzzPage.clickPostBtn();
        await expect(page.locator('#oxd-toaster_1')).toBeVisible()
    });

    myTest('Verify after clicking the Share Photos btn the upload popup is opened', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.clickSharePhotosBtn();
        await expect(page.locator('[class="orangehrm-modal-header"] p ')).toHaveText('Share Photos');
    });

    myTest('Verify the file is uploaded', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.clickSharePhotosBtn();
        await buzzPage.uploadFile();
        await buzzPage.clickShareButton();
        await expect(page.locator('[class="oxd-toast-container oxd-toast-container--bottom"]')).toBeVisible();
    });

    myTest('Verify the multiple files are uploaded', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.clickSharePhotosBtn();
        await buzzPage.uploadFile();
        await buzzPage.addPhotosButton();
        await buzzPage.clickShareButton();
        await expect(page.locator('[class="oxd-toast-container oxd-toast-container--bottom"]')).toBeVisible();
    });

    myTest('Verify the post is deleted', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.fillPostField('delete');
        await buzzPage.clickPostBtn();
        await buzzPage.clickThreeDotsBtn();
        await buzzPage.clickDeletePostIcon();
        await buzzPage.clickYesDeleteButton();
        await expect(page.locator('[class="oxd-toast-container oxd-toast-container--bottom"]')).toBeVisible();
    });

    myTest('Verify after clicking X the Shere Photos pop up is closed', async ({ page, startPage }) => {
        const buzzPage = new BuzzPage(page);
        await buzzPage.clickBuzzOption();
        await buzzPage.clickSharePhotosBtn();
        await buzzPage.clickXButton();
        const buzzNewsFeedHeader = page.getByText('Buzz Newsfeed')
        await expect(buzzNewsFeedHeader).toBeVisible();
    })
});