import { test, expect } from '@playwright/test';
import RegistrationPage from '../Pages/RegistrationPage.js';
import { faker } from '@faker-js/faker';
import utils from '../Utils/utils.js';
import jsonData from '../Utils/userData.json';

test.skip('Registration', async ({ page }) => {
   await page.goto('/auth/login');
    const registration=new RegistrationPage(page);
    const newUser={
        name: faker.person.firstName(),
        email: faker.internet.email(),
        institution: faker.company.name(),
        password: faker.internet.password()
        
    };
    await registration.Registration(newUser);
    utils.saveData(newUser);
    const toast = page.locator('.Toastify__toast').first();
    const msg = await toast.textContent();
    console.log('Success Message:', msg);
    await expect(toast).toHaveText(/successfully Registered/i);
    
});

