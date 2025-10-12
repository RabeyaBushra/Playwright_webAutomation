class PendingBlogPage{
    constructor(page) {
        this.page = page;
        this.pendingbtn=page.locator("//span[@class='btn-tab-text ms-2'][normalize-space()='Pending']");
        this.Btn = this.page.locator("(//*[name()='svg'][@class='bi bi-three-dots-vertical'])[1]")
        this.deleteBtn = page.locator("(//button[normalize-space()='Delete'])[1]");
        this.TrashText =page.getByRole('button', { name: 'Trash' });
        
    }

    async Pendingblog_submit() {
         await this.page.waitForTimeout(3000);
        await this.pendingbtn.click();
        // await this.svg.waitFor({ state: 'visible', timeout: 15000 });
        // await this.svg.scrollIntoViewIfNeeded();
        await this.page.evaluate(() => window.scrollBy(0, 400));
         await this.page.waitForTimeout(3000);
        await this.Btn.click();
        await this.deleteBtn.hover();
        await this.deleteBtn.click({ force: true });
        await this.TrashText.click();

       

    }
}

export default PendingBlogPage;