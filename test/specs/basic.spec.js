const GuidePage = require('../page/Guide.page.js')
const MainPage = require('../page/MainPage.js')
const Page = require('../page/Page.js')


describe ('test', () => {


    
    it ('register from main page', async () =>{

        await browser.url("https://v5.webdriver.io/")
              
        await MainPage.serchTextEntering();
        await browser.pause(1000)
        
     })


 
    // it ('check text', async () =>{

    //     await browser.url("https://v5.webdriver.io/")
              
    //     await browser.pause(1000)
    //     await MainPage.guideBtnClick();
    //     await browser.pause(1000)
    //     await GuidePage.checkText();
           
    //  })
 
})


