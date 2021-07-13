const GuidePage = require('../page/Guide.page.js')
const MainPage = require('../page/MainPage.js')
const Page = require('../page/Page.js')


describe ('test2', () => {

    it ('check text2', async () =>{

        await browser.url("https://v5.webdriver.io/")
              
        await browser.pause(1000)
        await MainPage.guideBtnClick();
        await browser.pause(1000)
        await GuidePage.checkText("Some text");
        
             
     })
    
})