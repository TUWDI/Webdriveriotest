const page = require('../page/page.js')


const emailInput = '[name="user[email]"]'
const email = 'atgasf@gmail.com';


class MainRegisterPage {

  async setEmail() {

    await page.setValue(emailInput, email);
  }

}

module.exports = new MainRegisterPage();