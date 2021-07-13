const Page = require('./page');

class EnterpriseServerPage extends Page {
  
    open () { return super.open('https://github.com/enterprise'); }

    get enterpriseServer () {return $('//div [contains(text(),"Enterprise Server")]/../..')}

    get name () {return $('#contact_request_name')};
    get nameOrganisation () {return $('#contact_request_organization_name')};
    get workEmail () {return $('#contact_request_email')};
    get phoneNum () {return $('#contact_request_phone')}
    get radioBtn () {return $ ('#contact_request_instance_type_azure')}
    get secRadioBtn () {return $('#questions_yes')}
    get questionlist () {return $ ('#questions-list')}
    get accpetTerm () {return $('#contact_request_agreed_to_terms')}

}

module.exports= new EnterpriseServerPage();