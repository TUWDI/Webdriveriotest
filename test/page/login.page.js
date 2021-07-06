const Page = require('./page');

class LoginPage extends Page {
  
    open () { return super.open('https://github.com/login'); }

    get userName (){return $('#login_field')}
    get password (){return $('#password')}
    get SignInLogin (){return $('[value="Sign in"]')} 
    get titleCheck () {return $('[class="f4 text-normal pt-md-3"]')}
    get ProfileBtn () {return $('[class="details-overlay details-reset js-feature-preview-indicator-container"]')}
    get loginCheck () {return $('//*[contains(text(),"Signed in as ")]')}

    async userNameEntering (userName) {await (await this.userName).setValue(userName)};
    async passwordEntering (passWord) {await (await this.password).setValue(passWord)};
    async buttonPressSignIn () {await (await this.SignInLogin).click()};
    async ProfileButton () {await (await this.ProfileBtn).click()};
    

}

module.exports= new LoginPage();