import { Page, Locator } from "@playwright/test";

export class BuzzPage {

    readonly page: Page;
    readonly buzzOption: Locator;
    readonly postFiled: Locator;
    readonly postButton: Locator;
    readonly sharePhotosButton: Locator;
    readonly file: Locator;
    readonly shareBtn: Locator;
    readonly addPhotosBtn: Locator;
    readonly deletePost: Locator;
    readonly deletePostIcon: Locator;
    readonly yesDeleteBtn: Locator;
    readonly xBtn: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buzzOption = page.getByText('Buzz', { exact: true });
        this.postFiled = page.getByPlaceholder("What's on your mind?");
        this.postButton = page.locator('[class="oxd-button oxd-button--medium oxd-button--main"]');
        this.sharePhotosButton = page.getByRole('button', { name: ' Share Photos'});
        this.file = page.locator('[class="orangehrm-photo-input"] input[type="file"]');
        this.shareBtn = page.locator('[class="oxd-form-actions orangehrm-buzz-post-modal-actions"] button[type="submit"]');
        this.addPhotosBtn = page.getByRole('button', { name: ' Add Photos '});
        this.deletePost = page.locator('li button[class="oxd-icon-button"]').first();
        this.deletePostIcon = page.getByText('Delete Post');
        this.yesDeleteBtn = page.getByRole('button', { name: ' Yes, Delete '});
        this.xBtn = page.locator('[class="oxd-dialog-close-button oxd-dialog-close-button-position"]');
    }

    async clickBuzzOption() {
        await this.buzzOption.click();
    }

    async fillPostField(post: string) {
        await this.postFiled.fill(post);
    }

    async clickPostBtn() {
        await this.postButton.click();
    }

    async clickSharePhotosBtn() {
        await this.sharePhotosButton.click();
    }

    async uploadFile() {
        await this.file.setInputFiles('/home/mian/Documents/study/orangehrm/testFiles/outlet.jpg');
    }

    async uploadMultipleFiles() {
        await this.file.setInputFiles( 
            '/home/mian/Documents/study/orangehrm/testFiles/photo_2026-08-17_19-29-41 (3).jpg'
        );
    }

    async addPhotosButton() {
        await this.addPhotosBtn.click();
    }

    async clickShareButton() {
        await this.shareBtn.click();
    }

    async clickThreeDotsBtn() {
        await this.deletePost.click();
    }

    async clickDeletePostIcon() {
        await this.deletePostIcon.click();
    }

    async clickYesDeleteButton() {
        await this.yesDeleteBtn.click();
    }

    async clickXButton() {
        await this.xBtn.click();
    }
}