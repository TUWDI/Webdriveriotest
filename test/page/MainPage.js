
const Page = require('./Page');
const Input = '[id="search_input_react"]'  
const text = 'asf3241@gmail.com'
const guideBtn = '[href="/docs/gettingstarted.html"]'

class MainPage  {
  
   async serchTextEntering ()  {await Page.setValue(Input,text) }
   async guideBtnClick(){await Page.click(guideBtn)}


}

module.exports= new MainPage ();