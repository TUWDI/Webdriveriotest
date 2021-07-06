const Page = require('./page');

class JoinFreePage extends Page {
  
    open () { return super.open('https://github.com/pricing'); }

    
    get signUp () {return $('[data-optimizely-event="click.signup"]')};
    get userName () {return $('#user_login')};
    get emailAddres () {return $('#user_email')};
    get passWord () {return $('#user_password')};
    get verify () {return $('//*[contains(text(),"Verify your account")]')}
    
    
    

}

module.exports= new JoinFreePage();



