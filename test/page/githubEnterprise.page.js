const Page = require('./page');

class EnterprisePage extends Page {
  
    open () { return super.open('https://github.com/enterprise'); }


    get startTrial () {return $('[data-hydro-click-hmac="b9a60338ff59d1813fb4031e8be39add425b4fa441ee152f2dd31b77e03e3358"]')};
    get enterpriseCloud () {return $('//div [@class="height-full mx-2 rounded-2 signup-plan-card color-gray-9 mb-sm-4  pb-2"][1]')}
   
}

module.exports= new EnterprisePage();