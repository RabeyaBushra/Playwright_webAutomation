import { test, expect, chromium } from '@playwright/test';
import CreateBlogPage from '../Pages/CreateBlogPage.js';
import jsonData from '../Utils/userData.json' assert { type: 'json' };
import LoginPage from '../Pages/LoginPage.js';
import DraftBlogPage from '../Pages/DraftBlogPage.js';
import PendingBlogPage from '../Pages/PendingBlogPage.js';
import TrashBlogPage from '../Pages/TrashBlogPage.js';
import LogOutPage from '../Pages/LogOutPage.js';

let page; 
let context;
let browser;

test.beforeAll(async () => {
    browser = await chromium.launch({ headless:false}); 
    context = await browser.newContext();
    page = await context.newPage();
    const login=new LoginPage(page);
    await login.gotoLogin();
    const latestUser=jsonData[jsonData.length - 1];
    console.log('Latest User:', latestUser);
    await login.LogIn(latestUser.email,'Account123@'+latestUser.password);
    // const toast = page.locator('.Toastify__toast').textContent();
    // await expect(page.locator('.Toastify__toast')).toHaveText(/Successfully login/);


});



test('Create a new blog', async () => {

const blogPage = new CreateBlogPage(page);
 await blogPage.createblog_saveasDraft();
//  await page.waitForSelector('.Toastify__toast', { state: 'visible', timeout: 10000 });
//  const toastText = await page.locator('.Toastify__toast').textContent();
//  console.log("Toast message:", toastText);
//  await expect(page.locator('.Toastify__toast')).toHaveText(/Blog created successfully/);

});
test('Draf blog submit_delete', async () => {
await page.evaluate(() => window.scrollBy(0, 700));
 const drafblog = new DraftBlogPage(page);
 await drafblog.draftblog_submit();
//  await page.waitForSelector('.Toastify__toast', { state: 'visible', timeout: 10000 });
//  const toastText = await page.locator('.Toastify__toast').textContent();
//  console.log("Toast message:", toastText);
//  await expect(page.locator('.Toastify__toast')).toHaveText(/Blog is updated successfully/);
// await drafblog.draftblog_Delete();
//  await page.waitForSelector('.Toastify__toast', { state: 'visible', timeout: 10000 });
//  const toastText_ = await page.locator('.Toastify__toast').textContent();
//  console.log("Toast message:", toastText);
//  await expect(page.locator('.Toastify__toast')).toHaveText(/Blog is trashed successfully/);
 

});
// test('Trash blog revert to draft', async () => {
//  const trashblog = new TrashBlogPage(page);
//  await trashblog.Trashblog_reverttoDraft();
//  await page.waitForSelector('.Toastify__toast', { state: 'visible', timeout: 10000 });
//  const toastText = await page.locator('.Toastify__toast').textContent();
//  console.log("Toast message:", toastText);
//  await expect(page.locator('.Toastify__toast')).toHaveText(/Blog is updated successfully/);

//  await trashblog.Trashblog_permanentlydelete();
//  await page.waitForSelector('.Toastify__toast', { state: 'visible', timeout: 10000 });
//  const toastText_ = await page.locator('.Toastify__toast').textContent();
//  console.log("Toast message:", toastText_);
//  await expect(page.locator('.Toastify__toast')).toHaveText(/Blog deleted successfully/);
 

// });




test.afterAll(async () => {
   const logoUt=new LogOutPage(page);
   await logoUt.Logout();
//    const toastText_ = await page.locator('.Toastify__toast').textContent();
//    console.log("Toast message:", toastText_);
//    await expect(page.locator('.Toastify__toast')).toHaveText(/Logout Successfully/);
   await page.pause();
   //await context.close();

});
