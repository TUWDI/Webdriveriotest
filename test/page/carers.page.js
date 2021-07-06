const Page = require('./page');

class CarersPage extends Page {
  
    get carersBtn () {return $('[href="/about/careers"]')}
    get openPositionBtn () {return $('[class="f3-light d-inline-block mr-5 js-smoothscroll-anchor"]')}
    
    

    async setElement (id) { let PositionId =  '(//h3[@class="float-left f3-mktg text-normal py-4"])'+"["+id+"]"; return $(PositionId); };

}

module.exports= new CarersPage();