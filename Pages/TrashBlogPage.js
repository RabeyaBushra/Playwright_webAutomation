class TrashBlogPage {
    constructor(page) {
        this.page = page;
        this.trashtxt=page.locator("//span[normalize-space()='Trash']");
        this.svg=page.locator("(//*[name()='svg'][@class='bi bi-three-dots-vertical'])");
        this.revertbtn=page.locator("(//button[@type='button'][normalize-space()='Revert to draft'])");
        this.draftbtn=page.locator("(//button[normalize-space()='draft'])[1]");
        this.permanatlydeletebtn=page.locator("(//button[contains(@type,'button')][normalize-space()='Permanent Delete'])")
        this.deletebtn=page.locator("(//button[normalize-space()='delete'])[1]");

    }

    async Trashblog_permanentlydelete() {
        await this.page.waitForTimeout(5000);
//await this.svg.scrollIntoViewIfNeeded();
await this.svg.nth(0).click({ force: true });
await this.permanatlydeletebtn.nth(0).hover();
await this.permanatlydeletebtn.nth(0).click({ force: true });
await this.deletebtn.click();   
    } 

    

async Trashblog_reverttoDraft() {
await this.page.waitForTimeout(5000);
await this.trashtxt.click();      
await this.page.waitForTimeout(5000);
//await this.svg.scrollIntoViewIfNeeded();
await this.svg.nth(6).click({ force: true });
await this.revertbtn.nth(0).hover();
await this.revertbtn.nth(0).click({ force: true });
await this.draftbtn.click();
    }
}
export default TrashBlogPage;