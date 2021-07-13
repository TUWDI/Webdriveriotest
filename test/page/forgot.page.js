const Page = require('./page');

class ForgotPage extends Page {
  
    open () {return super.open('https://github.com/password_reset'); }
    
    get email_field () {return $('#email_field')}
    get Verify () {return $('//*[contains(text(),"Verify your account")]')}
    
    async emailEntering (emailrestore) {await (await this.email_field).setValue(emailrestore)};
    
}

module.exports= new ForgotPage();