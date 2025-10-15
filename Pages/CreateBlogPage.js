class CreateBlogPage {
  constructor(page) {
    this.page = page;
    this.createBlog_= page.getByRole('link', { name: 'Create a new blog' });
    this.uploadImagebtn=page.getByAltText('upload-illus');
    this.blog=page.getByPlaceholder('eg. What is UI/UX testing');
    this.choosetopic=page.locator("//div[@class='chooseCategory__value-container css-hlgwow']");
    this.WriteContent = page.locator('[contenteditable="true"]');
    this.tagInput=page.locator('//input[@placeholder="Add a tag"]');
    this.Remarks=page.getByLabel('Remarks ( Any notes for the admin )');
    this.switchElement =page.locator('#checkNativeSwitch');
    this.MetaTitle=page.getByRole('textbox', { name: 'Add Title' });
    this.AddDescription=page.getByRole('textbox', { name: 'Add Description' });
    this.AddOGTitle=page.getByRole('textbox', { name: 'Add OG Title' });
    this.AddOGDescription=page.getByRole('textbox', { name: 'Add OG Description' });
    this.previewbtn = this.page.locator("//div[@class='postSubmissionPolicy__indicators css-1wy0on6']");
    this.submitbtn=page.getByRole('button', { name: 'SUBMIT' });
  }
  async createblog_saveasDraft() {
    await this.page.waitForTimeout(5000);
  //await this.page.waitForSelector('text=Create a new blog', { state: 'visible', timeout: 30000 });

  await this.createBlog_.click();
  await this.page.waitForTimeout(5000);
  await this.blog.nth(0).click();
  await this.blog.nth(0).fill('My First Blog'); 
  await this.page.waitForSelector("//div[@class='chooseCategory__value-container css-hlgwow']", { state: 'visible', timeout: 10000 });
  await this.choosetopic.click(); 
  await this.page.evaluate(() => window.scrollBy(0, 700));
  await this.page.getByText('WEB TESTING', { exact: true }).click();
  await this.page.waitForTimeout(2000);
  await this.WriteContent.click();
  await this.WriteContent.fill('This is my first blog content...');
  await this.tagInput.click();
  await this.tagInput.fill('Testing');
  await this.page.keyboard.press('Enter');
  await this.blog.nth(1).click();
  await this.blog.nth(1).fill('My First Blog Tag');
  await this.switchElement.check(); 
  await this.page.waitForSelector('input[name="meta.meta_title"]', { state: 'visible', timeout: 10000 });
  await this.MetaTitle.click();
  await this.MetaTitle.fill('My First Blog Meta Title');
  await this.AddDescription.click();
  await this.AddDescription.fill('This is the description for my first blog.');
  await this.page.waitForSelector('textarea[name="meta.og_description"]', { state: 'visible', timeout: 20000 });
  await this.AddOGDescription.click();
  await this.AddOGDescription.fill('This is the OG description for my first blog.');
  await this.previewbtn.click();
  await this.page.getByText('Save as Draft', { exact: true }).click();
  await this.page.pause();
  }
}
export default CreateBlogPage;