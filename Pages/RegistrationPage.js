class RegistrationPage {

    constructor(page) { 
      this.page = page;
      this.SignUpButton = page.getByRole('link', { name: 'Sign up' });
      this.NameTxt = page.getByRole('textbox', { name: 'eg. John Doe' });
      this.EmailTxt = page.getByPlaceholder('eg. user@user.com');
      this.CountryTxt =page.locator('select[name="country_id"]');
      this.AccountTypeTxt = page.locator('select[name="profession"]');
      this.institutionTxt=page.getByRole('textbox', { name: 'Institution name' });
      this.PasswordTxt = page.locator('input[name="password"]');
      this.ConfirmPasswordTxt = page.locator('input[name="password_confirmation"]');
      this.TermsTxt = page.getByRole('checkbox', { name: 'By clicking signup you are accepting our  Terms and Policy' });
      this.SignUpTxt = page.locator('button[type="submit"]');
    }

    async Registration(userModel) {
        
       await this.SignUpButton.click();
       await this.NameTxt.fill(userModel.name);
       await this.EmailTxt.fill(userModel.email);
       await this.CountryTxt.selectOption({ label: 'Bangladesh' });
       await this.AccountTypeTxt.selectOption({ label: 'Student' }); // expects value or label
       await this.institutionTxt.fill(userModel.institution);
       await this.PasswordTxt.fill('Account123@'+userModel.password);
       await this.ConfirmPasswordTxt.fill('Account123@'+ userModel.password);
       await this.TermsTxt.check();
       await this.SignUpTxt.click();
    }
}
export default RegistrationPage;