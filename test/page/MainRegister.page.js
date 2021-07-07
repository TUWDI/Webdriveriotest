const page  = require('../page/page.js')


const continueBtn = '[data-optimizely-event="click.signup_continue.email"]' 
const emailInput = '[name="user[email]"]'
const passwordInput = '[name="user[password]"]'
const continueBtn2 = '[data-optimizely-event="click.signup_continue.password"]'
const usernameInput = '[name="user[login]"]'
const continueBtn3 = '[data-optimizely-event="click.signup_continue.username"]'


const email = 'atgasf@gmail.com';
const password = 'SAsfd3rsadf46'
const username = 'TestAcountForWebdriverIo'






class MainRegisterPage  {




  async setEmail (){

    await page.setValue(emailInput,email);
  }

 
}

module.exports= new MainRegisterPage ();