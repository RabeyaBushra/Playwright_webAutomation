class DraftBlogPage {
 constructor(page) {
        this.page = page;
        this.svg = page.locator("(//*[name()='svg'][@class='bi bi-three-dots-vertical'])[1]");
        this.submitBtn = page.locator("(//button[normalize-space()='Submit'])[1]");
        this.deleteBtn = page.locator("(//button[contains(@type,'button')][normalize-space()='Delete'])[1]");
        this.TrashText =page.getByRole('button', { name: 'Trash' });

 }
    async draftblog_submit() {
      
await this.svg.scrollIntoViewIfNeeded();
await this.svg.click({ force: true });
await this.submitBtn.hover();
await this.submitBtn.click({ force: true });
    }

      async draftblog_Delete() {

await this.page.waitForTimeout(5000);      
await this.svg.scrollIntoViewIfNeeded();
await this.svg.click({ force: true });
await this.deleteBtn.hover();
await this.deleteBtn.click({ force: true });
await this.TrashText.click();

    }
}
export default DraftBlogPage;