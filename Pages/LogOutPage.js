class LogOutPage {
    constructor(page) {
        this.page = page;
        this.logoutbtn=page.getByRole('button', { name: 'Sign Out' });
        this.yesbtn=page.getByRole('button', { name: 'Yes' });

    }

    async Logout() {
        await this.page.waitForTimeout(5000);
        await this.logoutbtn.click();
        await this.yesbtn.click();
    }
}
export default LogOutPage;