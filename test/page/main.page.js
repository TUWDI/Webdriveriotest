const Page = require('./page');

class MainPage extends Page {
  
    open () { return super.open('https://github.com/');
    }

    get emailInput () {return $('#user_email')}
    get signUpBtn () {return $('[class="btn-mktg btn-primary-mktg width-full width-sm-auto"]'); }
    get signInBtn () {return $('[href="/login"]')}
  
    get WhyGithub () {return $('//*[contains(text(),"Why GitHub?")]')};
    get explore() {return $('//*[contains(text(),"Explore")]')};
    get pricing() {return $('//*[contains(text(),"Pricing")]')};
    get plansOfPrice () {return $('[href="/pricing"]')};

    async EnterEmail (email) { await (await this.emailInput).addValue(email); }
    async pressSignUpBtn (){await (await this.signUpBtn).click();}
    async pressSignInBtn (){await (await this.signInBtn).click();}

    async mousehoverOnElem (elemetToHover){await elemetToHover.moveTo()};
    async elmentIsDisplayed (elementToCheck) {await elementToCheck.isDisplayed();}
    async elemntClick (elementToClick) { await elementToClick.click()};
    
    async addValuetoElem (element, value) {await element.addValue(value)};

    async GenerateRandomEmail (lengthEmail,lengthDomain)
   {
     var text = "";
     var Sumbols = "abcdefghijklmnopqrstuvwxyz0123456789"
     for (var i = 0; i< lengthEmail; i++) { text += Sumbols.charAt(Math.floor(Math.random()*Sumbols.length));}

     text+= "@";

     for (var j = 0; j< lengthDomain; j++){text += Sumbols.charAt(Math.floor(Math.random()*Sumbols.length));}
     text+='.com';
     return text;

    }

    async GenerateRandomText (textLength)
    {   var text = "";
        var Sumbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
        for (var i = 0; i< textLength; i++){text += Sumbols.charAt(Math.floor(Math.random()*Sumbols.length));}
        return text;
    }

    async GenerateRandomNum (textLength)
    {   var text = "+";
        var Sumbols = "0123456789"
        for (var i = 0; i< textLength; i++){text += Sumbols.charAt(Math.floor(Math.random()*Sumbols.length));}
        return text;
    }
    

}

module.exports= new MainPage();