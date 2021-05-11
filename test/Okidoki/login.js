const data = require ('./data');

describe('Succesful login to webpage - Login with correct data', () => {
    it('Should log in', () => {

        //Open Sign in form
        browser.url('https://www.okidoki.ee/login/'); 

        //Select Email input & add email
        const email = $("#login-input");
        email.click();
        email.setValue(data.login.userName);

        //Select Password input & add password
        const password = $("#password-input");
        password.click()
        password.setValue(data.login.password);

        //Login - Button click
        $('input[type="submit"]').click();

        browser.pause(2000);

        //Check if url changed after login 
        const urlAfterLogin = browser.getUrl()
        
        expect(urlAfterLogin).to.equal("https://www.okidoki.ee/", "Error - wrong credentials or there is CAPTCHA that needs to be solved");    
     

    });

    it('Should log out', () => {
        //Hover on menu opener to log out
        $(".menuopener").moveTo();

        browser.pause(2000);

        //Click on Logout button
        const menuLogOut = $("#hlogout");
        menuLogOut.click();
                
        browser.pause(2000);

        //After succesful logout login and regiter buttons are displayed - Check if one of them exist on page to confirm logout
        const login = $('a[href="/login/"]')
        const logintxt=login.getText();

        expect(logintxt).to.contain("Logi sisse", "Error - User is not logged out");
    });
});