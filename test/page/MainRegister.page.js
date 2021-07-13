const { apiBtn } = require('./login.page');
const Page = require('./page');

class MainRegisterPage extends Page {
  
  
  get continueEmail ()     {return $('[data-optimizely-event="click.signup_continue.email"]')}
  get continuePassword ()  {return $('[data-optimizely-event="click.signup_continue.password"]')}
  get continueUserName ()  {return $('[data-optimizely-event="click.signup_continue.username"]')}
  get continueProduct ()  {return $('[data-optimizely-event="click.signup_continue.opt-in"]')}
  get veriFiy (){return $('//*[contains(text(),"Verify your account")]')}

  get email () {return $('#email')}
  get password () {return $('#password');}
  get userName () {return $('#login');}
  get resiveProduct () {return $('#opt_in')}

  async emailEntering (email)  {await (await this.email).addValue(email);}
  async passwordEntering (password)  {await (await this.password).addValue(password);}
  async UserNameEntering (user) {await (await this.userName).addValue(user);}
  async ProductAnswer (){await (await this.resiveProduct).addValue("y");}

  async contFromEmail() {await (await this.continueEmail).click();}
  async contFromPassword (){await (await this.continuePassword).click();}
  async contFromUserName (){await (await this.continueUserName).click();}
  async contFromProduct () {await (await this.continueProduct).click();}

 
}

module.exports= new MainRegisterPage ();