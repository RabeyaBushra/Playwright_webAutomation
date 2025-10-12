class LoginPage{


 constructor(page){

this.page=page;
this.EmailTxt=page.getByPlaceholder('eg. user@user.com');
this.PasswordTxt=page.locator('input[name="password"]');
this.LoginBtn=page.locator('button[type="submit"]');


    }

      async gotoLogin() {
      await this.page.goto('/auth/login'); // your login URL
  }

    async LogIn(email,password){
        await this.EmailTxt.fill(email);
        await this.PasswordTxt.fill(password);
        await this.LoginBtn.click();
    }
}
export default LoginPage;