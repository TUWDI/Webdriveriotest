const mainRegisterPage = require('../page/MainRegister.page.js')


describe ('test', () => {


    
    it ('register from main page', async () =>{

        await browser.url("https://v5.webdriver.io/")
               
        await browser.pause(1000)
        await mainRegisterPage.setEmail();
        await browser.pause(1000)
        
     })
 
 
   
    
})


