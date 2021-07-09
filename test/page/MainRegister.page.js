const page = require('../page/page.js')


const emailInput = '[id="search_input_react"]'
const email = 'atgasf@gmail.com';


class MainRegisterPage {

  async setEmail() {

    await page.setValue(emailInput, email);
  }

}

module.exports = new MainRegisterPage();